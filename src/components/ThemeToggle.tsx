import {Moon, Sun} from "lucide-react"
export function ThemeToggle({lightMode, onToggle}:{lightMode:boolean, onToggle: () => void}){

    return(
        <button 
        onClick={onToggle}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {lightMode ? (
                <Moon className="w-5 h-5"/>
            ):(
                <Sun className="w-5 h-5"/>
            )}
         
        </button>
    )

}