class LoginFormContainer extends Component {

  static navigationOptions = {
    tabBarLabel: translations.t('login'),
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../images/ic_person_outline.png')}
        style={{tintColor: tintColor}}
      />
    )
  }

  render() {
    return (
      <LoginFormComponent
        login={this.props.login} />
    )
  }
}

LoginFormContainer.propTypes = {
  login: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  login: loginUser
}

export default connect(null, mapDispatchToProps)(LoginFormContainer)
