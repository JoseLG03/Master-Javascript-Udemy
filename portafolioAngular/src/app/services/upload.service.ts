import {Injectable} from '@angular/core';
import {Global} from './global';

@Injectable()
export class UploadService{
    public url:string;

    constructor(){
        this.url = Global.url;
    }

    makeFileRequest(url:string, params: Array<string>, files:Array<File>, name:string){
        return new Promise(function(resolve, reject){
            let formData:any = new FormData();
            let xhr = new XMLHttpRequest();

            for(let i=0; i<files.length; i++){
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST',url,true);
            xhr.send(formData);
        });
    }
}