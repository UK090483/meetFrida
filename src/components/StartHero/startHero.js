import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Frida from "../frida/frida"
import style from "./startHero.module.scss"
import Button from "../buttons/button"

export default function StartHero() {
  const data = useStaticQuery(graphql`
    query startHeroQuery {
      storyQL {
        ArtworkItems(per_page: 100) {
          items {
            content {
              Image {
                filename
              }
            }
          }
        }
      }
    }
  `)

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const allImages = data.storyQL.ArtworkItems.items
  const [images, setImages] = useState([])

  useEffect(() => {
    function getImageWithlocal() {
      let item = allImages[getRandomInt(0, allImages.length)].node.images
      if (!!!item[0].local) {
        return getImageWithlocal()
      }
      return item[0].local.childImageSharp.fluid.src
    }
    function transformImage(image, option) {
      var imageService = "https://img2.storyblok.com/"
      var path = image.replace("https://a.storyblok.com", "")
      return imageService + option + "/" + path
    }

    function getNext() {
      let item = allImages[getRandomInt(0, allImages.length)]
      return transformImage(
        item.content.Image.filename,
        "150x0/filters:quality(60)"
      )
    }

    const int = setTimeout(() => {
      const nextImages = [...images]
      if (nextImages.length > 10) {
        nextImages.shift()
      }

      // let src = getImageWithlocal()
      let src = getNext()

      const NextImage = {
        key: Date.now(),
        zIndex: getRandomInt(0, 2) > 0 ? 1 : 0,
        src: src,
        left: `${getRandomInt(0, 100)}vw`,
      }
      if (src) {
        nextImages.push(NextImage)
      }
      setImages(nextImages)
    }, 500)
    return () => {
      clearTimeout(int)
    }
  }, [allImages, images, setImages])

  return (
    <React.Fragment>
      <div className={style.root}>
        <div className={style.text}>
          <h6 style={{ fontWeight: 800 }}>
            Neue Positionen kennenlernen, Kunst in ganz Deutschland sehen und
            dabei Kunstschaffende unterstützen.
            {/* Neue Werke, wechselnde Ausstellungsorte, 1 Plattform. */}
          </h6>
          <h1 style={{ fontWeight: 800 }}>
            <Frida /> – Deutschlands größte Outdoor- und Online-Gallery für
            junge Kunst
            {/* Deutschlandweite Kunstschau und Online-Galerie – <Frida></Frida> */}
          </h1>
          <Button
            label={"Mehr Erfahren"}
            link={"/ausstellung/"}
            backgroundColor={"lila"}
          />
        </div>

        {images.map(image => {
          return (
            <img
              alt={"flying "}
              className={style.image}
              style={{ left: image.left, zIndex: image.zIndex }}
              key={image.key}
              src={image.src}
            ></img>
          )
        })}
      </div>

      {/* <div
        className={style.stoerer}
        onMouseEnter={() => { setMouse('link', true) }}
        onMouseLeave={() => { setMouse('link', false) }}
      >
        <Link to="/unterstützen/">
          <Stoerer></Stoerer>
        </Link>
      </div>

      <Section>
        <div className={style.stoererSpacer}></div>
      </Section> */}
    </React.Fragment>
  )
}
