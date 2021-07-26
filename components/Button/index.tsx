
import {colors } from '../../styles/theme'
export default function Button ({children, onClick}) {
    return (
        <>
            <button onClick={onClick}>
                {children}
            </button>

            <style jsx>{`
                button {
                    background: ${colors.secondary};
                    border: 0;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 800;
                    border-radius: 9px;
                    padding: 10px 20px; 
                    cursor: pointer;
                    transition: opacity .3s ease
                }

                button:hover {
                    opacity: .7
                }
                

            `}</style>
        </>
    )
}