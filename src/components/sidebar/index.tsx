'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Sidebar() {
    const [selected, setSelected] = useState<string>('')

    const items = {
        "dashboard": {
            "titulo": 'teste',
            "icone": 'T'
        },
        "relatorio": {
            "titulo": 'teste',
            "icone": 'T'
        },
        "acesso": {
            "titulo": 'teste',
            "icone": 'T'
        },
        "gerenciador": {
            "titulo": 'teste',
            "icone": 'T'
        },
        "pog": {
            "titulo": 'teste',
            "icone": 'T'
        },
        "pix": {
            "titulo": 'teste',
            "icone": 'T'
        },
    }

    return (
        <aside className='max-w-[290px] w-full h-full flex flex-col justify-start items-center bg-white'>
            <h2 className='my-20'>SwiftPay</h2>
            <div className='flex flex-col gap-4 w-full'>
                {
                    Object.entries(items).map(([key, value]) => (
                        <Link 
                            key={key}
                            href={`/`}
                            onClick={() => setSelected(key)}
                            className={`w-full flex justify-center relative`}
                        >
                            <span className={`text-${key == selected ? 'text-[#4318FF]' : 'text-[#333]'}`}>{value.icone}</span>
                            <b className={`font-bold ${key == selected ? 'text-[#2B3674]' : 'text-[#333]'}`}>{value.titulo}</b>
                            <div className={`absolute right-0 h-full ${key == selected ? 'border-2 rounded-full border-[#4318FF]' : ''}`}></div>
                        </Link>
                    ))
                }
            </div>
        </aside>
    )
}