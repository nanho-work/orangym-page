'use client';

import React from 'react';

const handleScroll = (id: string) => {
    requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
};

const trainers = [
    { name: ' 종춘', id: 'jongchun' },
    { name: ' 성진', id: 'seongjin' },
    { name: ' 재원', id: 'jaewon' },
    { name: ' 성혁', id: 'seonghyuk' },
    { name: ' 준호', id: 'juneho' }
];

const ManagerSidebar = () => {
    return (
        <div className="p-4 hidden md:block">
            <div className="p-4  text-lg text-center w-[150px]">
                <h2 className=" font-bold mb-4">트레이너</h2>
                <ul className="space-y-2">
                    {trainers.map(trainer => (
                        <li key={trainer.id}>
                            <button onClick={() => handleScroll(trainer.id)} className="text-orangym hover:underline">
                                {trainer.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManagerSidebar;