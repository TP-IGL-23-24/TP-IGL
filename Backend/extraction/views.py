from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class AddArticleView(APIView):
    def post(self, request, *args, **kwargs):
        # Assurez-vous que votre modèle d'article est importé
        # from .models import Article

        # Traitement du fichier ici (extraction d'informations, sauvegarde en base de données, etc.)
        file = request.FILES.get('file')
        # Utilisez votre fonction d'extraction ici.
        print('done')
        # extract_information_from_pdf(file)
        # Exemple : sauvegarde en base de données
        # article = Article.objects.create(file=file, other_field=other_value)
        # article.save()

        # Exemple de réponse
        return Response({'message': 'Article ajouté avec succès!'}, status=status.HTTP_201_CREATED)

