import React from "react";
import SearchBar from "../components/SearchScreen/serachBar";
import FilterBar from "../components/SearchScreen/filterBar";
import DateButton from "../components/SearchScreen/dateButton";
import searchPic from "../assets/searchPic.png";
import profilePic from "../assets/userIcon.png";
import favoritesPic from "../assets/fullHeart.png";


const optionsList = ['word 1', 'word 2', 'word 3'];

const SearchScreen =()=>{
    return(
        <div className="font-montserrat flex ">
             <div className="bg-lightBlue h-screen w-4/6 fixed overflow-y-auto">
                <p className="text-3xl font-bold text-darkBlue mt-16 mb-5 ml-20">What are you looking for ?</p>
                <SearchBar/>
                <img src={searchPic} alt="Search Page Pic" className="w-1/3 mt-10  ml-48" />
            </div>
            <div className="font-montserrat flex flex-col mt-5 ml-auto mr-14">
                <div className="flex mb-20 ml-auto">
                    <button>
                    <img src={favoritesPic} alt="Search Page Pic" className="w-10 h-10 mr-6" />
                    </button>
                    <button>
                    <img src={profilePic} alt="Search Page Pic" className="w-10 h-10" />
                    </button>
                   
                </div>
                <FilterBar title={"Keywords"} listOfOptions={optionsList}/>
                <FilterBar title={"Authors"} listOfOptions={optionsList}/>
                <FilterBar title={"Institutions"} listOfOptions={optionsList}/> 
                <DateButton date={"Start Date"}/>
                <DateButton date={"End Date"}/>
                <button className="mt-3">
                     <p className="bg-pink text-white rounded-full py-2">Filtrer Resultat</p>   
                </button>
            </div>
        </div>

    );
}
export default SearchScreen;