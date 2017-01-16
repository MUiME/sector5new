export function chatConversationDroppable($document, $timeout) {
    "ngInject";

    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            $document.bind('dragenter', function(e){
                e.preventDefault();

                if(e.target != elem[0]){
                    scope.$apply(function(){
                        scope.chat.isConvDropZoneShow = true;
                        scope.chat.isConvDroppableHover = false;
                    });
                }
            });

            $document.bind('dragover', function(e){
                e.preventDefault();
            });

            $document.bind('dragleave', function(e){
                e.preventDefault();

                if(e.offsetX <= 0 && e.offsetY <= 0){
                    scope.$apply(function(){
                        scope.chat.isConvDropZoneShow = false;
                        scope.chat.isConvDroppableHover = false;
                    });
                }
            });

            $document.bind('drop', function(e){
                e.preventDefault();

                scope.$apply(function(){
                    scope.chat.isConvDropZoneShow = false;
                });
            });


            elem.bind('dragenter', function (e) {
                e.preventDefault();

                scope.$apply(function(){
                    scope.chat.isConvDroppableHover = true;
                });
            });

            elem.bind('drop', function (e) {
                e.preventDefault();

                scope.$apply(function(){
                    scope.chat.isConvDroppableHover = false;
                });

                let fileList = e.target.files || e.dataTransfer.files;
                let arrFiles = [];

                for (let i = 0; i < fileList.length; i++) {
                    let file = fileList[i];
                    arrFiles.push(file);
                }

                scope.chat.sendFile(arrFiles);

                $timeout(function() {
                    var chatConvMsgs = $('#chatConvMsgs');
                    chatConvMsgs.scrollTop(chatConvMsgs[0].scrollHeight);
                }, 100);
            });







//
//
//
//             m_chk_network();
//
//            var list_objfile = e.target.files || e.dataTransfer.files;
//            delete list_objfile.length;
//
//            var sum_cf = tsh_elem('#upload_capacityfile'+tsh_wmsgextid_focusnow).get('capacity').toInt();
//            Object.each(list_objfile, function(objfile){
//                sum_cf += objfile.size;
//            });
//            if(sum_cf > capacityfile_max){
//                setTimeout(function(){
//                    tsh_self.barcontent_call("TSH_ALERT_OVERLIMITFILESIZE");
//                }, 350);
//            }
//            else{
//                if(m_barcontent_getcallvalue() == "TSH_ALERT_OVERLIMITFILESIZE"){
//                    setTimeout(function(){
//                        tsh_writemsg_closeoverlimitfilesize();
//                        m_barcontent_hide();
//                    }, 350);
//                }
//
//
//                var show_notification = function(){
//                    tsh_elem('#upload_areanotif'+tsh_wmsgextid_focusnow).setStyle('display', "inline-block");
//                };
//
//                var hide_notification = function(){
//                    tsh_elem('#upload_areanotif'+tsh_wmsgextid_focusnow).setStyle('display', "none");
//                };
//
//                var chk_notification = function(){
//                    if(tsh_elems('#upload_container'+tsh_wmsgextid_focusnow+' .upload_progressbar').length == 0){
//                        hide_notification();
//                    }
//                    else{
//                        show_notification();
//                    }
//                };
//
//                var set_numfile = function(value){
//                    tsh_elem('#upload_numfile'+tsh_wmsgextid_focusnow).set('num', value);
//                    tsh_elem('#upload_numfile'+tsh_wmsgextid_focusnow).set('text', value+" "+((value > 1)? "files": "file"));
//                };
//
//                var get_extfile = function(fname){
//                    var list_ext = [
//                        'aac', 'ai', 'aiff', 'avi', 'bmp', 'c', 'cpp', 'css', 'dat', 'dmg',
//                        'doc', 'dotx', 'dwg', 'dxf', 'eps', 'exe', 'flv', 'gif', 'h', 'hpp',
//                        'html', 'ics', 'iso', 'java', 'jpeg', 'jpg', 'key', 'mid', 'mp3', 'mp4',
//                        'mpg', 'odf', 'ods', 'odt', 'otp', 'ots', 'ott', 'pdf', 'php', 'png',
//                        'ppt', 'psd', 'py', 'qt', 'rar', 'rb', 'rtf', 'sql', 'tga', 'tgz',
//                        'tiff', 'txt', 'wav', 'xls', 'xlsx', 'xml', 'yml', 'zip'
//                    ];
//
//                    var reg_ext = '';
//                    list_ext.each(function(ext){
//                        reg_ext += (reg_ext? '|': '')+ext;
//                    });
//
//                    if(fname.test(new RegExp('^(.+)\.('+reg_ext+')$', 'i'))){
//                        var ext = fname.substring(fname.lastIndexOf('.')+1);
//                        if(ext == 'jpeg'){ ext = 'jpg'; }
//
//                        return ext;
//                    }
//                    else{
//                        return false;
//                    }
//                };
//
//                var format_capacityfile = function(value){
//                    if(value > 1024*100){
//                        cf = (value/(1024*1024)).round(2)+" MB";
//                    }
//                    else if(value > 100){
//                        cf = (value/1024).round(2)+" KB";
//                    }
//                    else{
//                        cf = value.round(2)+" B"
//                    }
//                    return cf;
//                };
//
//                var set_capacityfile = function(value){
//                    tsh_elem('#upload_capacityfile'+tsh_wmsgextid_focusnow).set('capacity', value);
//                    tsh_elem('#upload_capacityfile'+tsh_wmsgextid_focusnow).set('text', format_capacityfile(value));
//                };
//
//                show_notification();
//
//                Object.each(list_objfile, function(objfile){
//                    var new_upload_overview = new Element('div', {
//                        'class':"upload_overview_tbl",
//                        'style':"color:rgb(165, 165, 165);",
//                        'html': '<div class="upload_overview_tblcell" style="width:33px;"><div class="upload_overview_fileicon">'+(get_extfile(objfile.name)? get_extfile(objfile.name).toUpperCase(): '&nbsp;')+'</div></div>'+
//                                '<div class="upload_overview_tblcell" style="width:85px;"><div class="upload_overview_filename m_ellipsis">'+objfile.name+'</div></div>'+
//                                '<div class="upload_overview_tblcell"><div class="upload_overview_filesize">'+format_capacityfile(objfile.size)+'</div></div>'
//                    });
//                    var new_upload_progressbar = new Element('div', {'class':"upload_progressbar"});
//                    var new_upload_progress = new Element('div', {'class':"upload_progress"});
//
//                    var new_upload_areatooledit = new Element('div', {'class':"upload_area_tooledit"});
//                    var new_upload_tooledit = new Element('span', {'class':"upload_tooledit"});
//                    var new_upload_btremove = new Element('span', {'elem':"button", 'text':"Remove", 'class':"upload_bt_remove"});
//                    var new_upload_btcancel = new Element('span', {'elem':"button", 'text':"Cancel", 'class':"upload_bt_cancel"});
//
//                    var new_upload_btedit = new Element('a', {'href':"#", 'class':"upload_bt_edit", 'text':"X"});
//
//                    new_upload_progress.inject(new_upload_progressbar);
//                    new_upload_overview.inject(new_upload_progressbar);
//                    new_upload_btedit.inject(new_upload_progressbar);
//
//                    new_upload_btremove.inject(new_upload_tooledit);
//                    new_upload_btcancel.inject(new_upload_tooledit);
//                    new_upload_tooledit.inject(new_upload_areatooledit);
//                    new_upload_areatooledit.inject(new_upload_progressbar);
//
//                    new_upload_progressbar.inject(tsh_elem('#upload_container'+tsh_wmsgextid_focusnow));
//
//                    if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
//                        var xhr = new XMLHttpRequest();
//                    }
//                    else{// code for IE6, IE5
//                        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
//                    }
//
//                    if (xhr.upload){
//                        xhr.upload.addEventListener("progress", function(e) {
//                            var percent = e.loaded / e.total * 100;
//                            new_upload_progress.setStyle('width', percent+"%");
//                        }, false);
//
//                        xhr.onreadystatechange = function(e) {
//                            if(xhr.readyState == 4) {
//                                new_upload_progress.setStyle('width', "100%");
//                                if(xhr.status == 200 && xhr.responseText == 1){
//                                    new_upload_progress.addClass('success');
//                                    new_upload_overview.setStyle('color', "rgb(60, 60, 60)");
//
//                                    tsh_wmsgfiles.push(objfile);
//                                    tsh_writemsg_saveinput();
//
//                                    var numfile = tsh_elem('#upload_numfile'+tsh_wmsgextid_focusnow).get('num').toInt() + 1;
//                                    set_numfile(numfile);
//
//                                    var capacityfile = tsh_elem('#upload_capacityfile'+tsh_wmsgextid_focusnow).get('capacity').toInt() + objfile.size;
//                                    set_capacityfile(capacityfile);
//
//                                    chk_notification();
//
//                                    tsh_writemsg_chkaccept();
//                                }
//                                else{
//                                    new_upload_progress.addClass('failed');
//                                }
//                            }
//                        };
//
//                        xhr.open("POST", "/tool/writemsg/ajax_uploadfile.php?do=process&wmsgind[typebox]="+tsh_wmsgind_focusnow.typebox+"&wmsgind[uid]="+tsh_wmsgind_focusnow.uid+"&wmsgind[typemsg]="+tsh_wmsgind_focusnow.typemsg, true);
//                        xhr.setRequestHeader("Pragma", "no-cache");
//                        xhr.setRequestHeader("Cache-Control", "no-cache");
//                        xhr.setRequestHeader("Expires", "0");
//                        xhr.setRequestHeader("X_FILENAME", encodeURIComponent(objfile.name));
//                        xhr.setRequestHeader("X_FILESIZE", objfile.size);
//                        xhr.send(objfile);
//
//                        tsh_writemsg_chkaccept();
//                    }
//
//                    new_upload_btedit.addEvent('click', function(e){
//                        e.stop();
//
//                        new Fx.Tween(new_upload_areatooledit, {
//                            duration:350,
//                            property:"width"
//                        }).start(new_upload_tooledit.offsetWidth);
//                    });
//
//                    new_upload_btremove.addEvents({
//                        'mousedown':function(){
//                            this.addClass("click");
//                        },
//                        'mouseup':function(){
//                            this.removeClass("click");
//
//                            m_chk_network();
//
//                            if(xhr.readyState < 4){
//                                xhr.abort();
//                            }
//                            else{
//                                tsh_wmsgfiles.erase(objfile);
//                                tsh_writemsg_saveinput();
//
//                                var numfile = tsh_elem('#upload_numfile'+tsh_wmsgextid_focusnow).get('num').toInt() - 1;
//                                set_numfile(numfile);
//
//                                var capacityfile = tsh_elem('#upload_capacityfile'+tsh_wmsgextid_focusnow).get('capacity').toInt() - objfile.size;
//                                set_capacityfile(capacityfile);
//                            }
//
//                            tsh_writemsg_rmfile(tsh_wmsgind_focusnow, objfile.name);
//
//                            new_upload_progressbar.dispose();
//
//                            chk_notification();
//
//                            tsh_writemsg_chkaccept();
//                        }
//                    });
//
//                    new_upload_btcancel.addEvents({
//                        'mousedown':function(){
//                            this.addClass("click");
//                        },
//                        'mouseup':function(){
//                            this.removeClass("click");
//
//                            new Fx.Tween(new_upload_areatooledit, {
//                                duration:350,
//                                property:"width"
//                            }).start(0);
//                        }
//                    });
//                });
//            }

        }
    };
}
