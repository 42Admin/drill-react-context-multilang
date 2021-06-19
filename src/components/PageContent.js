import React, { useContext } from 'react'
import { LanguageContext } from '../context/Language'
import Buttons from './Buttons'

function PageContent () {
  const language = useContext(LanguageContext);

  return (
    <div className="mt-2">
      <div className="display-2 text-secondary mb-3">
        {language.text.welcome}
      </div>
      <p className="lead">
        {language.text.appDescription}
      </p>

      <Buttons />
    </div>
  )
}

export default PageContent;
