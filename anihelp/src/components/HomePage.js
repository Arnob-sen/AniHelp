import React from 'react'
import cover from './cover.jpg'
import ConsultancyCard from './ConsultancyCard'
import poultryImg from './img/poultry.png'
import birdImg from './img/bird.png'
import catImg from './img/cat.png'
import cowImg from './img/cow.png'
import dogImg from './img/dog.png'
import fishImg from './img/fish.png'
import horseImg from './img/horse.png'
import rabbitImg from './img/rabbit.png'
import Hr from './Hr'
import Carousel from './Carousel'
import NewsLetter from './NewsLetter'

function HomePage() {
  return (
    <>
        <img class="h-2/3 w-full my-4" src={cover} alt="Cover "/>
        <Hr value={4}/>
        <h4 class="flex justify-center items-center mb-2 text-4xl font-bold tracking-tight text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Select Animal Category</h4>
        <Hr value={4}/>
        <div className="grid grid-cols-3 gap-4 px-3 py-4">
            <a href='/bird'>
                <ConsultancyCard title="POULTRY" photo={poultryImg} info="For Colibacillosis (Coliform infections, Mycoplasmosis, Fowl Cholera, Necrotic Enteritis, Ulcerative Enteritis (Quail disease), Pullorum Disease, Fowl Typhoid, Botulism etc diseases."/>
            </a>
            <a href='/fish'>
                <ConsultancyCard title="FISHERIES" photo={fishImg} info="For Tail and fin rot, Bacterial gill rot, Dropsy, Fungal diseases, Parasitic diseases, Viral diseases, White spot disease Ichthyophthirius multifiliis etc diseases."/>
            </a>
            <a href='/cattle'>
                <ConsultancyCard title="CATTLE" photo={cowImg} info="For Bluetongue, Botulism, Bovine Tuberculosis, Bovine Viral Diarrhea (BVD), Brucellosis, Epizootic haemorrhagic disease, EU Exceptional Adjustment Aid, Foot and Mouth disease etc"/>
            </a>
            <a href='/other'>
                <ConsultancyCard title="DOG" photo={dogImg} info='Canine distemper. Canine distemper is caused by a very contagious virus, Canine influenza ("canine flu" or "dog flu") Canine influenza is caused by the canine influenza virus, Canine parvovirus ("parvo"), External parasites (ticks, fleas and mange), Heartworms, Leptospirosis.'/>
            </a>
            <a href='/other'>
                <ConsultancyCard title="CAT" photo={catImg} info="For Cancer,Diabetes,Feline Immunodeficiency Virus (FIV),Feline Leukemia Virus (FelV),Heartworm,High-Rise Syndrome,Rabies,Upper Respiratory Infections,Ringworm etc diseases."/>
            </a>
            <a href='/other'>
                <ConsultancyCard title="RABBIT" photo={rabbitImg} info="For Overgrown Rabbit Teeth,Teeth problems, Myxomatosis, Flystrike, RVHD, Rabbit Head Tilt, Rabbit Ear Mites, Rabbit Skin Conditions, Poisoning etc diseases."/>
            </a>
            <a href='/cattle'>
                <ConsultancyCard title="HORSE" photo={horseImg} info="For African Horse Sickness, Contagious Equine Metritis, Eastern/Western/Venezuelan Equine Encephalitis, Equine Herpes Virus, Equine Infectious Anemia, Equine Piroplasmosis, Equine Viral Arteritis, Vesicular Stomatitis etc diseases."/>
            </a>
            <a href='/bird'>
                <ConsultancyCard title="BIRD" photo={birdImg} info='Birds affected with salmonella can show ruffled feathers, swollen eyelids, or lethargy, Avian Conjunctivitis (House Finch Disease), Bird Mites, "Bald" Birds, How to Prevent the Spread of Disease at Bird Feeders etc diseases.'/>
            </a>

        </div>
        <Hr value={4}/>
        <h4 class="flex justify-center items-center mb-2 text-4xl font-bold tracking-tight text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">News</h4>
        <Hr value={4}/>
        <Carousel/>
        <Hr value={4}/>
        <NewsLetter/>
        <Hr value={4}/>
    </>
  )
}

export default HomePage