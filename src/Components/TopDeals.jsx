import React from 'react';

const TopDeals = () => {
    const deals = [
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/water-geyser/m/9/7/-original-imahd77j8jh7hmge.jpeg?q=60",text:"Fans & Geysers", Price :"From ₹999"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/shoe/p/h/q/-original-imagg5yfzfzzhgzq.jpeg?q=60",text:"Footwear", Price :"From ₹199"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/t-shirt/h/z/k/-original-imagg5yfhzhz7ggh.jpeg?q=60",text:"Clothing", Price :"From ₹149"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/headphone/e/g/h/-original-imagg5yfzfzzhgzq.jpeg?q=60",text:"Headphones", Price :"From ₹299"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/watch/h/z/k/-original-imagg5yfhzhz7ggh.jpeg?q=60",text:"Watches", Price :"From ₹199"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/laptop/h/q/h/-original-imagg5yfzfzzhgzq.jpeg?q=60",text:"Laptops", Price :"From ₹15,999"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/mobile/h/q/h/-original-imagg5yfhzhz7ggh.jpeg?q=60",text:"Smartphones", Price :"From ₹3,999"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/tv/j/z/k/-original-imagg5yfzfzzhgzq.jpeg?q=60",text:"TVs", Price :"From ₹4,999"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/kitchen-appliance/o/z/h/-original-imagg5yfhzhz7ggh.jpeg?q=60",text:"Kitchen Appliances", Price :"From ₹499"},
        {icon:"https://rukminim2.flixcart.com/image/220/220/xif0q/refrigerator/g/z/h/-original-imagg5yfzfzzhgzq.jpeg?q=60",text:"Refrigerators", Price :"From ₹8,499"},
    ]

    const sortDeals = deals.sort(() => Math.random() - 0.5); // Shuffle the array randomly
  return (
    <div className='mt-13 gap-4 justify-center bg-slate-50/60 mb-3'>
        <h1 className='text-2xl m-3 space-y-5 font-semibold'>Top Deals</h1>
        <div className='flex gap-5 overflow-x-auto scrollbar-hide p-2'>
            {sortDeals.map((deal, index) => (
                <div key={index} className='flex flex-col items-center w-full gap-3 p-2 bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform'>
                    <img src={deal.icon} alt={deal.text} className='w-20 h-20 object-contain mb-2'/>
                    <p className='text-sm font-medium text-center'>{deal.text}</p>
                    <p className='text-xs text-gray-500'>{deal.Price}</p>
                </div>
            ))}
        </div>
      
    </div>
  );
}

export default TopDeals;
