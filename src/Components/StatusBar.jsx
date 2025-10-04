import React from 'react';

const StatusBar = () => {

    const data = [
        {icon : "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100", text: "minutes"},
        {icon:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" ,text:"Mobile & tablets"},
        {icon:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100", text:"Best of Electronics"},
        {icon:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100", text:"TVs & Appliances"},
        {icon:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100", text:"Flight Bookings"},
        {icon:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100", text:"Grocery"},
        {icon:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100", text:"Fashion"},
        {icon:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100", text:"Home & Furniture"},
        {icon:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100", text:"Beauty, Toys & More"},
    ]
  return (
    <div className='flex gap-5 p-3 mt-16 overflow-x-auto whitespace-nowrap'>
        {
            data.map((item)=>(
                <div className='hover:cursor-pointer hover:text-blue-500 transition-all duration-300 w-full flex flex-col items-center gap-1'>
                    <img src = {item.icon} className='font-semibold'></img>
                    <span className='font-semibold'>{item.text}</span>
                </div>
            ))
        }

      
    </div>
  );
}

export default StatusBar;
