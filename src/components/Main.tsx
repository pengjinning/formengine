import React from 'react'

export const Main = () => {
  return <>
    <h1 className="page-title">Drag & Drop Form Builder Library for React</h1>
    <h2 className="page-subtitle">Develop front-end drag and drop forms with ease, resulting in cost savings and reduced development
      timing</h2>
    <h2 className="page-subtitle">You can reach out more information on <a href="https://formengine.io">formengine.io</a>.</h2>
    <div className="card-container">
      <div className="card">
        <div>
          <a href="/form-builder">
            <img className="card-image" src="/form-builder.png" alt="Form Builder" title="Form Builder"/>
          </a>
        </div>
        <div className="image-caption">Form Builder</div>
      </div>
      <div className="card">
        <div>
          <a href="/form-viewer">
            <img className="card-image" src="/form-viewer.png" alt="Form Example" title="Form Example"/>
          </a>
        </div>
        <div className="image-caption">Form Example</div>
      </div>
    </div>
  </>
}
