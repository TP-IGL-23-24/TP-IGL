
from openai import OpenAI
import fitz
import re
from .models import Article, Author, Keyword, Institution, Reference

def lire_pdf_first_page(chemin_du_pdf, sortie_texte):
    doc = fitz.open(chemin_du_pdf)

    with open(sortie_texte, 'w', encoding='utf-8') as fichier_texte:
            # Première page
            page = doc[0]
            texte_page = page.get_text()
            fichier_texte.write(texte_page)
            
            
    doc.close()

def lire_pdf(chemin_du_pdf, sortie_texte):
    doc = fitz.open(chemin_du_pdf)

    with open(sortie_texte, 'w', encoding='utf-8') as fichier_texte:
            for page_num in range(doc.page_count):
                page = doc[page_num]
                texte_page = page.get_text()
                fichier_texte.write(texte_page)
            
            
    doc.close()

def extract_information_from_pdf(chemin_du_pdf):
    # chemin_du_pdf = './Articles/Article_10.pdf'
    # sortie_texte = 'out.txt'

    lire_pdf_first_page(chemin_du_pdf, sortie_texte)

    file_path = 'out.txt'  
    with open(file_path, 'r', encoding='utf-8') as file:
        file_content = file.read()


    client = OpenAI(
        api_key="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"
    )

    # prompt = "From this text, extract for me the title , the keywords, the autors names and the abstract (output exactly what is written without changes in this format : (Title: the extraced title \n Keywords : keyword1, keyword2, ... \n autors : autour1, autor2, ... \n abstract : the extracted abstract) ) '"+file_content+"'"

    # prompt = "From this text, extract for me the title and the keywords (preceded by the word keywords in the text) and the authors names and the abstract (preceded by the word abstract in the text) (output exactly what is written without changes) '"+file_content+"'"

    # prompt="Given the provided text, please extract the entire following information exactly as it appears in the text : \n Title \n Keywords (preceded by the word 'keywords' in the text) \n Authors' names \n Abstract (preceded by the word 'abstract' in the text) \n Institutions  \n here is the text : "+file_content
    prompt="From the provided page of the PDF, please extract the following information exactly as it appears in the text and present it in the specified format: \n Title: [the title] \n Keywords: [keyword1, keyword2, ...] \n Institution: [institution name] \n Authors' names: [author name 1, author name 2, ...] \n Abstract: [the complete text of the abstract] \n here is the text extracted from the PDF : "+file_content

    chat_completion = client.chat.completions.create(
        messages = [
            {
                "role":"user",
                "content":prompt
            },    
        ],
        model="gpt-3.5-turbo"
    )

    print(chat_completion.choices[0].message.content)

    dt_title = re.compile("(?<=Title: ).+")
    # The Title var
    title=dt_title.search(chat_completion.choices[0].message.content).group(0)

    dt_keywords = re.compile("(?<=Keywords: ).+")
    # The keywords var
    keywords=dt_keywords.search(chat_completion.choices[0].message.content).group(0)
    mots_cles = keywords.split(', ')

    dt_institution = re.compile("(?<=Institution: ).+")
    # The institution var
    institution=dt_institution.search(chat_completion.choices[0].message.content).group(0)

    dt_authors = re.compile("(?<=Authors' names: ).+")
    # The authors var
    authors=dt_authors.search(chat_completion.choices[0].message.content).group(0)
    auteurs = authors.split(', ')

    dt_abstract = re.compile("(?<=Abstract: ).+")
    # The Abstract var
    abstract=dt_abstract.search(chat_completion.choices[0].message.content).group(0)


    # print('\n')
    # print(abstract)
    # print('\n')
    # print(auteurs)
    # print('\n')
    # print(institution)
    # print('\n')
    # print(mots_cles)
    # print('\n')
    # print(title)
    # print('\n')
    # print(first_tit)


    # Extraction text integral
    lire_pdf(chemin_du_pdf,sortie_texte)
    with open(sortie_texte, 'r', encoding='utf-8') as file:
        file_content = file.read()

    # Trouver l'index du mot-clé "Introduction" ou "Motivation"
    index_intro_motivation = min(
        file_content.find("Introduction"),
        file_content.find("Motivation"),
        key=lambda x: x if x != -1 else float('inf')
    )

    # Trouver l'index du mot-clé "References" ou "REFERENCES"
    index_references = min(
        file_content.find("REFERENCES"), 
        file_content.find("References"), 
        key=lambda x: x if x != -1 else float('inf')
    )

    # Extraire tout ce qui se trouve entre "Introduction" et "References"
    text_integral = file_content[index_intro_motivation:index_references]

    # with open('text_integral.txt', 'w', encoding='utf-8') as fichier_sortie:
    #     fichier_sortie.write(text_integral)

    # Extraire les references
    references = file_content[index_references + len("References"):]

    # with open('ref.txt', 'w', encoding='utf-8') as output_file:
    #     output_file.write(references)

    article_instance = Article(
        title=title,
        keywords=mots_cles,
        institutions=institution,
        authors=auteurs,
        full_text=text_integral,
        references=references,
        abstract=abstract,
        pdf_url=chemin_du_pdf
    )

    return article_instance


