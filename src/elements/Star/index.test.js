import React from 'react'
import {render} from "@testing-library/react"
import Star from './index'

test("Should have props (value, height, width, spacing", () => {
    const height = 40, width= 40, spacing = 4;
    const {container} = render(<Star width={width} height={height} spacing={spacing} value={3.6}/>)
    const starYellow = "div.stars div.star:not(.placeholder)"

    expect(container.querySelector("div.stars")).toBeInTheDocument()
    // eslint-disable-next-line no-undef
    expect(container.querySelector("div.stars")).toHaveAttribute("style", stringContaining(`height: ${height}px`))
    // eslint-disable-next-line no-undef
    expect(container.querySelector(starYellow)).toHaveAttribute("style", stringContaining(`width: ${width}px`))
    // eslint-disable-next-line no-undef
    expect(container.querySelector(starYellow)).toHaveAttribute("style", stringContaining(`height: ${height}px`))
    // eslint-disable-next-line no-undef
    expect(container.querySelector(starYellow)).toHaveAttribute("style", stringContaining(`margin-right: ${spacing}px`))
})