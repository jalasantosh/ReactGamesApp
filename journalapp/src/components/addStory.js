import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './addStory.css';


function AddStory(props){

    const [editorState,setEditorState] = useState();

    return(
        //  <Editor
        
        // wrapperClassName="wrapper-class"
        // editorClassName="editor-class"/>
        <div>
            <div style={{height: 400}}>
                <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"/>
            </div>
            
            
            <div>
                {/* <div className="addImage" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    Add
                </div> */}
            </div>
        </div>
        
    )
}

export default AddStory;