import React, { useState } from "react"
import DropDown from "../../input/dropDown"
import style from "./filter.module.scss"
import getPriceWithTax from "../helper/getPriceWithTax"

const preisOptions = [
  { label: "100-500", value: "100-500" },
  { label: "500-1000", value: "500-1000" },
  { label: "1000-2000", value: "1000-2000" },
  { label: "2000-3000", value: "2000-3000" },
  { label: "3000-5000", value: "3000-5000" },
]

export default function Filter({ artworks, setFElements }) {
  const [curentlyOpen, setCurentlyOpen] = useState("")
  const [filter, setF] = useState({})

  const getOptions = () => {
    const artists = []
    const ArtistsOptions = []
    const stils = []
    const StilOptions = []
    const mediums = []
    const MediumOptions = []

    artworks.forEach(artwork => {
      const { artistName, stil, medium } = artwork

      if (!artists.includes(artistName)) {
        artists.push(artistName)
        ArtistsOptions.push({ label: artistName, value: artistName })
      }
      if (!stils.includes(stil)) {
        stils.push(stil)
        StilOptions.push({ label: stil, value: stil })
      }
      if (!mediums.includes(medium)) {
        mediums.push(medium)
        MediumOptions.push({ label: medium, value: medium })
      }
    })

    const sortedArtists = [...ArtistsOptions].sort(function (a, b) {
      var labelA = a.label.toUpperCase()
      var labelB = b.label.toUpperCase()
      if (labelA < labelB) {
        return -1
      }
      if (labelA > labelB) {
        return 1
      }
      return 0
    })

    return {
      artist: sortedArtists,
      stil: StilOptions,
      medium: MediumOptions,
    }
  }

  const options = getOptions()

  const handleSetOpen = i => {
    setCurentlyOpen(i)
  }
  const setFilter = (f, v) => {
    let nextFilter = { ...filter }
    nextFilter[f] = v
    setF(nextFilter)
    filterElements(nextFilter)
  }

  const filterElements = f => {
    let res = artworks.filter(e => {
      const artwork = e
      let res = true
      if (f.Artist) {
        res = artwork.artistName === f.Artist
      }
      if (f.Stil && res) {
        res = artwork.stil === f.Stil
      }
      if (f.Medium && res) {
        res = artwork.medium === f.Medium
      }
      if (f.Preis && res) {
        let range = f.Preis.split("-")

        const priceWithTax = getPriceWithTax(artwork.price)
        res =
          priceWithTax >= parseInt(range[0]) &&
          priceWithTax <= parseInt(range[1])
      }
      return res
    })

    setFElements(res)
  }

  return (
    <div className={style.root}>
      <DropDown
        label={"Künstler"}
        filterName={"Artist"}
        options={options.artist}
        open={curentlyOpen === "Künstler"}
        setOpen={i => handleSetOpen(i)}
        setFilter={setFilter}
        fixedHeight={true}
      ></DropDown>
      <DropDown
        label={"Stil"}
        filterName={"Stil"}
        options={options.stil}
        open={curentlyOpen === "Stil"}
        setOpen={i => handleSetOpen(i)}
        setFilter={setFilter}
      ></DropDown>
      <DropDown
        label={"Medium"}
        filterName={"Medium"}
        options={options.medium}
        open={curentlyOpen === "Medium"}
        setOpen={i => handleSetOpen(i)}
        setFilter={setFilter}
      ></DropDown>
      <DropDown
        label={"Preis"}
        filterName={"Preis"}
        options={preisOptions}
        open={curentlyOpen === "Preis"}
        setOpen={i => handleSetOpen(i)}
        setFilter={setFilter}
      ></DropDown>
    </div>
  )
}
