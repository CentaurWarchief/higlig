/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 * @flow
 */
import React, {Component} from 'react'

export default class Highlight extends Component {
  props: {
    word: string,
    wrap: (word: string) => ReactElement | string,
    children: string
  };

  static defaultProps: {};

  render(): ReactElement {
    var {word, children, wrap} = this.props

    var regex = new RegExp('('+ word +')', 'i')

    var matches = children.match(regex)

    if (! matches) {
      return (
        <span>{children}</span>
      )
    }

    var segments = children.split(regex)

    return (
      <span>
        {segments.map((segment: string, index: number) => {
          if (segment.trim() === matches[0]) {
            return wrap(matches.shift())
          }

          return (
            <span>{segment}</span>
          )
        })}
      </span>
    )
  }
}
