import React from "react"
import Language from "./../atoms/language"

class LanguageSet extends React.Component {
  render() {
    const langList = this.props.langList
    let languages = []

    for (const [, lang] of langList.entries()) {
      languages.push(<Language langName={lang}></Language>)
    }

    return <ul style={{ display: "flex", listStyle: "none" }}>{languages}</ul>
  }
}

export default LanguageSet
