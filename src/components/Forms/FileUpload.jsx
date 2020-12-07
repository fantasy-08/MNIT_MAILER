import React from 'react'

function FileUpload({fileSave,val}) {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                    File
                </span>
            </div>
            <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={fileSave}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                    {val}
                </label>
            </div>
        </div>
    )
}

export default FileUpload
