import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

import { Wrapper } from "../Wrapper/Wrapper";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import heroSlider from './Slider.module.css'

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function BasicSlider() {
    return (
        <HeroSlider
            height={"800px"}
            width={"100%"}
            className={heroSlider.slider}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}
        >
            <Overlay>
                <Wrapper>
                    <Title>Basic Setup</Title>
                    <Subtitle>
                        Check out the documentation for more advanced examples.
                    </Subtitle>
                </Wrapper>
            </Overlay>

            <Slide
                shouldRenderMask
                label="Giau Pass - Italy"
                background={{
                    backgroundImageSrc: giauPass
                }}
                className={heroSlider.images}
            />

            <Slide
                shouldRenderMask
                label="Bogliasco - Italy"
                background={{
                    backgroundImageSrc: bogliasco
                }}
                className={heroSlider.images}
            />

            <Slide
                shouldRenderMask
                label="County Clare - Ireland"
                background={{
                    backgroundImageSrc: countyClare
                }}
                className={heroSlider.images}
            />

            <Slide
                shouldRenderMask
                label="Crater Rock, OR - United States"
                background={{
                    backgroundImageSrc: craterRock
                }}
                className={heroSlider.images}
            />

            <MenuNav />
        </HeroSlider>
    );
}
