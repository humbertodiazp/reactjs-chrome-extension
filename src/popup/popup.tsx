import React from 'react';
import {createRoot} from 'react-dom/client'
import '../assets/tailwind.css'

const test = (
        <div>
            <h1 className="mt-4 m-2 pt-2 pb-2 text-5xl text-center bg-orange-400 rounded-3xl">Hello World</h1>
            <p className=" bg-orange-200 text-black text-xl mt-4 m-1 p-4 rounded-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis enim potest ea, quae probabilia videantur ei, non probare? Duo Reges: constructio interrete. Quae cum dixisset, finem ille.

            </p>
        </div>
    )

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)