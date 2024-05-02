import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Lesson() {
    const { id } = useParams();
    const [fileExists, setFileExists] = useState(false);
    const [content, setContent] =useState('');

    const checkFileExists = async () => {
        const response = await fetch(`http://localhost:5050/check/${id}`);
        const text = await response.json();
        setFileExists(text);
        console.log(text);
        return text;
    };

    const fetchFile = async () => {
        const response = await fetch(`http://localhost:5050/read/${id}`);
        const texting = await response.text();
        console.log(texting);
        setContent(texting);
        return texting;
    };

    checkFileExists();
    fetchFile();

    // useEffect(() => {
    //     const loadFileExistence = async () => {
    //         const fileExists12 = await checkFileExists();
    //         setFileExists(fileExists12 === true);
    //       };
    //       loadFileExistence();

            
    //   }, [id]);

    return ( 
        <div> 
            <h1>Lesson {id}</h1>
            <p>File check result: {fileExists.toString()}</p>
            <div>{fileExists ? <p>The file exists.</p> : <p>The file does not exist.</p>}
            </div>
            <p> {content} </p>
        </div> 
 );
};

export default Lesson;