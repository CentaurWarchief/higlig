/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 */
jest.dontMock('../Highlight.jsx')

var React = require('react/addons')
var Highlight = require('../Highlight.jsx')

var TestUtils = React.addons.TestUtils

describe('Highlight', () => {
  var shallowRenderer

  beforeEach(() => {
    shallowRenderer = TestUtils.createRenderer()
  })

  it('highlights a single word', () => {
    shallowRenderer.render(
      <Highlight word={'world'} wrap={word => <strong key={word}>{word}</strong>}>
        Hello, world!
      </Highlight>
    )

    var output = shallowRenderer.getRenderOutput()

    expect(output.type).toEqual('span')
    expect(output.props.children.length).toEqual(3)
    expect(output.props.children[0].props.children).toEqual('Hello, ')
    expect(output.props.children[1].type).toEqual('strong')
    expect(output.props.children[1].props.children).toEqual('world')
    expect(output.props.children[2].props.children).toEqual('!')
  })
})
