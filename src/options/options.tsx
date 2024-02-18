import React from 'react';
import {createRoot} from 'react-dom/client'
import '../assets/tailwind.css'

const test = (
        <div>
            <h1 className="mt-4 m-2 pt-2 pb-2 text-5xl text-center bg-orange-400 rounded-3xl"> Options </h1>
        </div>
    )

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)