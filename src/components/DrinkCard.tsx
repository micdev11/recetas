import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <div className="border shadow-xl bg-slate-200">
            <div className="overflow-hidden">
                <img 
                    src={drink.strDrinkThumb} 
                    alt={`Imagen de ${drink.strDrink}`}
                    className="hover:scale-110 transition-transform hover:rotate-1 rounded-md"
                />
            </div>

            <div className="p-5">
                <h2 className="text-xl truncate font-black text-center">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-2 font-bold text-white text-lg
                    rounded-lg"
                    onClick={() => selectRecipe(drink.idDrink)}
                >Ver Receta</button>
            </div>
        </div>
    )
}
