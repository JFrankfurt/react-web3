class Provider extends Component {
  getChildContext() {
    return {}
  }

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return Children.only(this.props.children)
  }
}

Provider.propTypes = {}
Provider.childContextTypes = {}

export default Provider
