import React, { useState } from 'react';



function Symtoms() {
  return (
    <div>
        <div class="bg-gray-100 p-4">
    <div class="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-lg">
      <h1 class="mb-4 text-2xl font-semibold text-gray-800">Fish Disease Symptoms</h1>
      <ul class="list-disc space-y-3 pl-6">
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">1</div>
          <div>
            <h2 class="font-semibold text-gray-700">Changes in Skin or Scales</h2>
            <p>Abnormal coloration, lesions, or raised scales, indicative of skin and scale issues or parasites.</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">2</div>
          <div>
            <h2 class="font-semibold text-gray-700">Abnormal Swimming Behavior</h2>
            <p>Erratic swimming patterns, such as floating at the water's surface or sinking to the bottom, suggesting swim bladder problems or infections.</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">3</div>
          <div>
            <h2 class="font-semibold text-gray-700">Loss of Appetite</h2>
            <p>Refusal to eat or reduced food consumption, a common early sign of illness in fish.</p>
          </div>
        </li>
       
      </ul>
    </div>
  </div>
  <div class="bg-gray-100 p-4">
    <div class="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-lg">
      <h1 class="mb-4 text-2xl font-semibold text-gray-800">Cattle Disease Symptoms</h1>
      <ul class="list-disc space-y-3 pl-6">
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">1</div>
          <div>
            <h2 class="font-semibold text-gray-700">Dehydration</h2>
            <p>Sunken eyes, dry muzzle, and reduced skin elasticity can indicate dehydration, often associated with illness.</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">2</div>
          <div>
            <h2 class="font-semibold text-gray-700">Drooling or Excessive Salivation</h2>
            <p>Drooling can be a sign of dental problems or ingestion of toxic plants.</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">3</div>
          <div>
            <h2 class="font-semibold text-gray-700">Eye Abnormalities</h2>
            <p>Cloudy eyes, excessive tearing, or squinting may indicate eye infections or injuries</p>
          </div>
        </li>
       
      </ul>
    </div>
  </div>
  <div class="bg-gray-100 p-4">
    <div class="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-lg">
      <h1 class="mb-4 text-2xl font-semibold text-gray-800">Poultry Disease Symptoms</h1>
      <ul class="list-disc space-y-3 pl-6">
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">1</div>
          <div>
            <h2 class="font-semibold text-gray-700">Drop in Egg Productione</h2>
            <p>A sudden decrease in egg production or the production of abnormal eggs (misshapen, soft-shelled) indicating health issues.</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">2</div>
          <div>
            <h2 class="font-semibold text-gray-700">Fever</h2>
            <p>Elevated body temperature is a general sign of illness in cattle and can be caused by various diseases.</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="mr-2 flex h-6 w-6 items-center justify-center text-red-600">3</div>
          <div>
            <h2 class="font-semibold text-gray-700">Diarrhea</h2>
            <p>Loose or watery droppings, a sign of gastrointestinal issues or infections.</p>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
      
    </div>
  )
}

export default Symtoms;
