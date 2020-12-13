import React from "react"
import styled from "styled-components"
import {
  Wrap,
  ImageWrap,
  InfoWrap,
  LoupImage,
  PaymenInfo,
  BuyButton,
  BuyButtonWrap,
  ProductName,
  Price,
  ImagePreview,
  Options,
  Quantity,
} from "~components/lib/ProductComponents"
import useShopify from "~components/hooks/useShopify"
import SozialShare from "../../SozialShare/SozialShare"

export default function SingleView({ data }) {
  const {
    variant,
    hasOptions,
    imagesArray,
    onImageClick,
    selectedOption,
    setOption,
    title,
    description,
    options,
    activeImage,
    quantity,
    setQuantity,
    inCart,
    addToCart,
    availability,
    checkoutUrl,
  } = useShopify(data)

  const {
    localFile: {
      childImageSharp: { smallImage, bigImage, sizes },
    },
  } = activeImage

  const { price } = variant

  return (
    <Wrap>
      <ImageWrap>
        <LoupImage
          smallImageSrc={smallImage.src}
          bigImageSrc={bigImage.src}
          aspectRatio={sizes.aspectRatio}
          alt={"bla"}
        />

        {imagesArray.length > 1 && (
          <ImagePreview images={imagesArray} handleClick={onImageClick} />
        )}
      </ImageWrap>
      <InfoWrap>
        <Groupe>
          <ProductName name={title} availability={availability} />
          <Price price={price} />
          <Description>{description}</Description>

          <ControlesWrap>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <Spacer />
            {hasOptions && (
              <Options
                options={options}
                setOption={setOption}
                selectedOption={selectedOption}
              />
            )}
          </ControlesWrap>
          <Spacer />
          <SozialShare />
          <Spacer />
          <BuyButtonWrap>
            <BuyButton
              checkoutUrl={checkoutUrl}
              availability={availability}
              addToCart={addToCart}
              inCart={inCart}
            />
          </BuyButtonWrap>
        </Groupe>
        <PaymenInfo />
      </InfoWrap>
    </Wrap>
  )
}

const ControlesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.tablet} {
  }
`

const Groupe = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Description = styled.p`
  font-size: 20px;
`
const Spacer = styled.div`
  height: 20px;
`
