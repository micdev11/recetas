import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length , [favorites])

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center">Favoritos</h1>

      {hasFavorites ? (
        <div className="grid grid-cols-4 md:grid-cols-4 2xl:grid-cols-4 my-10 gap-11">
          {favorites.map( drink => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
          ) )}
        </div>
      ) : (
        <p className="my-10 text-center text-xl">
          Los favoritos se mostrarán aquí
        </p>
      )}
    </>
  )
}
