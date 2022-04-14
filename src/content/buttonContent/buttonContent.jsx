import React, {useState,useEffect} from 'react'

import './buttonContent.css'
import Button from '../../component/button/button';
import ButtonType from '../../component/buttonType/buttonType'
import ButtonStatus from '../../component/buttonStatus/buttonStatus'

import {
    MdOutlineLocalGroceryStore
} from "react-icons/md"
export default function ButtonContent() {
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if (window.onload) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [])
    // Button colors
     const def_pry = {
         color: '#374151',
         backgroundColor: "#d4d4d8",
         borderColor: '#d4d4d8'
    }

    
    const def_hover = {
            color: '#374151',
             backgroundColor: "#a1a1aa",
             borderColor: '#a1a1aa'
    }

       const def1_pry = {
           color: '#3b82f6',
           backgroundColor: "#f8fafc",
           borderColor: '#3b82f6'
       }

       const def1_hover = {
           color: '#3b82f6',
           backgroundColor: "#dbeafe",
           borderColor: '#3b82f6'
    }
    
    // Button three

      const def2_pry = {
          color: '#3b82f6',
          backgroundColor: '#fff',
          borderColor: 'none'
      }

      const def2_hover = {
          color: '#3b82f6',
          backgroundColor: "#dbeafe",
          borderColor: '#dbeafe'
      }

    // Btn four

    const def3_pry = {
        color: '#fff',
        backgroundColor: "#3b82f6",
        borderColor: '#3b82f6'
    }
    const def5_pry = {
        color: '#fff',
        backgroundColor: "#3b82f6",
        borderColor: '#3b82f6'
    }

    const def4_pry = {
        backgroundColor: "#e5e7eb",
        borderColor: "#e5e7eb",
        color: "#a1a1aa"
    }
    const def4_hover = {
        backgroundColor: "#f9fafb",
        borderColor: "#f9fafb",
        color: "#a1a1aa"
    }

    const defsm_pry = {
        color: '#fff',
        backgroundColor: "#3b82f6",
        borderColor: '#3b82f6',
        padding: ".25em .5em"
    }

    const defmd_pry = {
        color: '#fff',
        backgroundColor: "#3b82f6",
        borderColor: '#3b82f6',
        padding: ".5em 1em"
    }

    const deflg_pry = {
        color: '#fff',
        backgroundColor: "#3b82f6",
        borderColor: '#3b82f6',
        padding: "1em 2em"
    }
    
    const def = {
        color: '#374151',
        backgroundColor: "#d4d4d8",
        borderColor: '#d4d4d8'
    }
    const defhover = {
        color: '#374151',
        backgroundColor: "#a1a1aa",
        borderColor: '#a1a1aa'
    }
    const pry = {
        color: '#fff',
        backgroundColor: "#3b82f6",
        borderColor: '#3b82f6',
    }
    const pry_hover = {
        color: '#fff',
        backgroundColor: "#1d4ed8",
        borderColor: '#1d4ed8',
    }
    const sec = {
        color: '#fff',
        backgroundColor: "#525252",
        borderColor: '#525252',
    }
    const sec_hover = {
        color: '#fff',
        backgroundColor: "#262626",
        borderColor: '#262626',
    }
    const danger = {
        color: '#fff',
        backgroundColor: "#dc2626",
        borderColor: '#dc2626',
    }
    const danger_hover = {
        color: '#fff',
        backgroundColor: "#b91c1c",
        borderColor: '#b91c1c',
    }
    

    if (loading) {
        return <h3 className='loading'>Loading...</h3>
    } else {
        
   
    return (
    //    Button colors
       
        
        <div className="App_buttons">
            <h3>Buttons</h3>

            <div className="App_buttons-container">
            <div className="single_button-row">
                <div className="button_box">
                    <ButtonType />
                     <Button btn={def_pry} text="Default" />   
               </div>
                <div className="button_box">
                        <ButtonStatus />
                        <Button btn={def_hover} text="Default"/>
                </div>     
            </div>
            <div className="single_button-row">
                    <div className="button_box">
                        <ButtonType variant="outline" />
                        <Button btn={def1_pry} text = "Default" />

                    </div>
                    <div className="button_box">
                        <ButtonStatus />
                        <Button btn={def1_hover} text="Default" />
                    </div>
              </div>
            <div className="single_button-row">
                    <div className="button_box">
                        <ButtonType variant="text" />
                        <Button btn={def2_pry} text = "Default" />
                   </div>
                    <div className="button_box">
                        <ButtonStatus />
                        <Button btn={def2_hover} text = "Default" />
                   </div>
              </div>
                <div className="single_button-row">
                    <div className="button_box">
                        <ButtonType status="disabledShadow"/>
                        <Button btn={def3_pry} text = "Default" />
                    </div>
              </div>
                <div className="single_button-row">
                    <div className="button_box">
                        <ButtonType status="disabled"/>
                        <Button btn={def4_pry} text = "Default" />
                    </div>
                    <div className="button_box">
                        <ButtonType variant="text" status="disabled"/>
                        <Button btn={def4_hover} text = "Default" />
                    </div>
              </div>
                <div className="single_button-row">
                    <div className="button_box">
                        <ButtonType startIcon="local_grocery_store" />
                        <Button btn={def5_pry} icon1={<MdOutlineLocalGroceryStore style={{ marginRight: "3px"}}/>}  text = "Default" />
                    </div>
                    <div className="button_box">
                        <ButtonType endIcon="local_grocery_store" />
                        <Button btn={def5_pry} icon2={<MdOutlineLocalGroceryStore style={{marginLeft: "3px"}} />} text = "Default" />
                    </div>
                </div>
                <div className="single_button-row">
                    <div className="button_box">
                        <ButtonType size="sm"/>
                        <Button btn={defsm_pry} text = "Default" />
                    </div>
                    <div className="button_box">
                        <ButtonType size="md" />
                        <Button btn={defmd_pry} text = "Default" />
                    </div>
                    <div className="button_box">
                        <ButtonType size="lg" />
                        <Button btn={deflg_pry} text = "Default" />
                    </div>
                 </div>
                <div className="single_button-row">
                    <div className="button_box">
                        <ButtonType color="default" />
                        <Button btn={def} text = "Default" />
                    </div>
                    <div className="button_box">
                        <ButtonType color="Primary" />
                        <Button btn={pry }text = "Default" />
                    </div>
                    <div className="button_box">
                        <ButtonType color="secondary"/>
                        <Button btn={sec} text = "Secondary" />
                    </div>
                    <div className="button_box">
                        <ButtonType color="Danger"/>
                        <Button btn={danger} text = "Danger" />
                    </div>
              </div>
                <div className="single_button-row">
                    <div className="button_box">
                        <ButtonStatus />
                        <Button btn={defhover} text = "Default" />
                    </div>
                    <div className="button_box">
                        <Button btn={pry_hover} text = "Default" />
                    </div>
                    <div className="button_box">
                        <Button btn={sec_hover} text = "Secondary" />
                    </div>
                    <div className="button_box">
                        <Button btn={danger_hover} text = "Danger" />
                    </div>
              </div>
            </div>
        </div>
        )
 }
}