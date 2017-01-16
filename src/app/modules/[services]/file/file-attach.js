/**
 * @ngdoc service
 * @name Services.service:FileAttachService
 * @description Service for file attachment.
 */
export function FileAttachService() {
    "ngInject"

    return {
        formatCapacity,
        getIcon
    };


    function formatCapacity(value){
        let cf;
        if(value > 1024*100){
            cf = (value/(1024*1024)).toFixed(2)+" MB";
        }
        else if(value > 100){
            cf = (value/1024).toFixed(2)+" KB";
        }
        else{
            cf = value.toFixed(2)+" B"
        }

        return cf;
    }

    function getIcon(fileName){
        let ext = getExt(fileName);

        return "/icons/files/"+(ext? ext: "_blank")+".png";
    }

    function getExt(fileName){
        let arrExts = [
            'aac', 'ai', 'aiff', 'avi', 'bmp', 'c', 'cpp', 'css', 'dat', 'dmg',
            'doc', 'dotx', 'dwg', 'dxf', 'eps', 'exe', 'flv', 'gif', 'h', 'hpp',
            'html', 'ics', 'iso', 'java', 'jpeg', 'jpg', 'key', 'mid', 'mp3', 'mp4',
            'mpg', 'odf', 'ods', 'odt', 'otp', 'ots', 'ott', 'pdf', 'php', 'png',
            'ppt', 'psd', 'py', 'qt', 'rar', 'rb', 'rtf', 'sql', 'tga', 'tgz',
            'tiff', 'txt', 'wav', 'xls', 'xlsx', 'xml', 'yml', 'zip'
        ];

        let reg_ext = '';
        arrExts.forEach(function(ext){
            reg_ext += (reg_ext? '|': '')+ext;
        });

        let regExp = new RegExp('^(.+)\.('+reg_ext+')$', 'i');
        if(regExp.test(fileName)){
            let ext = fileName.substring(fileName.lastIndexOf('.')+1);
            if(ext == 'jpeg'){ ext = 'jpg'; }

            return ext;
        }
        else{
            return false;
        }
    }
}
