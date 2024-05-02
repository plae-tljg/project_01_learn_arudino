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

    let paragraphs = content.split("\n"); // split the text into paragraphs
    let html_text = "";
    const colors = ["green", "blue"];

    for (let i = 0; i < (paragraphs.length); i++) {
    html_text += "<p class=\"bg-" + colors[ i%2 ] + "-100 mb-2 p-10;\">" + paragraphs[i] + "</p>";
    }

    return ( 
        <div class="flex-1 px-2 h-full overflow-auto whitespace-wrap"> 
            <div class="font-bold  text-center">Lesson {id}</div>
            <div>File check result: {fileExists.toString()}</div>
            <div>{fileExists ? <div>The file exists.</div> : <div>The file does not exist.</div>}
            </div>
            <div dangerouslySetInnerHTML={{__html: html_text}} class="p-5"></div>
            {/* <div class="text-block px-2 whitespace-wrap">lkm dfgdzgsdfgsafsdfsdfgwsdfsdfsdfdsfsdsdavasdasdasdasdasfsdfffsdfsdafsfsdafasdfsadfsadfsdfaerg</div> */}
            <div class="text-block whitespace-wrap pb-10">
                This is a long text that will wrap when it reaches the end of the line in its container.
            </div>
        </div> 
 );
};

export default Lesson;