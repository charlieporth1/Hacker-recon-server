if (self.CavalryLogger) { CavalryLogger.start_js(["AWcOa"]); }

__d("FeedObjectCapstone",["csx","DOM","Parent","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={getCapstone:function(a){var c=b("DOM").scry(a,"._x1g");c.length||(c=b("DOM").scry(a.parentNode,"._x1g"));return c?c[0]:null},addCapstoneByStoryID:function(a,c){a=b("Parent").bySelector(b("ge")(a),"._5jmm");this.addCapstone(a,c)},addCapstone:function(a,c){var d=b("DOM").find(a,"._5v3q");d&&(a=d);this.removeCapstone(a);c&&b("DOM").prependContent(a,c);return c},removeCapstone:function(a){a=h.getCapstone(a);a&&b("DOM").remove(a)}};e.exports=h}),null);
__d("EntstreamFeedObjectFollowup",["csx","cx","Arbiter","CSS","DOM","EntstreamFeedObject","Event","FeedObjectCapstone","ge"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="EntstreamFeedObjectFollowup/removed",j={getFollowup:function(a){var c=b("DOM").scry(a,"._5lum");c.length||(c=b("DOM").scry(a.parentNode,"._5lum"));return c?c[0]:null},initCloseButton:function(a){var c=b("DOM").scry(a,"._5xsl");if(c.length==0)return;var d=b("Event").listen(c[0],"click",function(){d.remove(),b("DOM").remove(a),b("Arbiter").inform(i,a)});a.listener=d},stopListenCloseButton:function(a){a.listener&&a.listener.remove()},addFollowup:function(a,c,d){__p&&__p();var e=b("CSS").matchesSelector(a,"._5pat"),f=b("DOM").create("div",{className:"_5lum"});e?b("CSS").addClass(f,"_5pau"):b("CSS").addClass(f,"_1f84");if(d)if(typeof d==="string")b("CSS").addClass(f,d);else if(d instanceof Array)for(var e=0;e<d.length;e++)b("CSS").addClass(f,d[e]);d=b("DOM").scry(a,"._5v3q")[0];d&&(a=d);e=j.getFollowup(a);e&&this.removeFollowup(e);b("FeedObjectCapstone").removeCapstone(a);c?(b("DOM").appendContent(f,c),this.initCloseButton(f),b("CSS").matchesSelector(f,"._4-u3")?b("DOM").prependContent(a,f):b("DOM").insertBefore(a,f)):b("DOM").prependContent(a,f);return f},removeFollowup:function(a){a=j.getFollowup(a);this.stopListenCloseButton(a);b("DOM").remove(a);b("Arbiter").inform(i,a)},appendToFollowup:function(a,c){a=b("EntstreamFeedObject").getRoot(b("ge")(a));a=j.getFollowup(a);b("DOM").appendContent(a,c)},addInstreamAdsFollowup:function(a){a=b("DOM").scry(a,"._211q");var c=b("DOM").create("div",{className:"_5lum"});b("DOM").prependContent(a[0],c);return c}};e.exports=j}),null);
__d("LivingRoomTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActualScheduledStartTime=function(a){this.$1.actual_scheduled_start_time=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setCommentBody=function(a){this.$1.comment_body=a;return this};c.setComposerSessionID=function(a){this.$1.composer_session_id=a;return this};c.setContentItemID=function(a){this.$1.content_item_id=a;return this};c.setCurationContext=function(a){this.$1.curation_context=a;return this};c.setDeviceid=function(a){this.$1.deviceid=a;return this};c.setEntrySource=function(a){this.$1.entry_source=a;return this};c.setErrorMessage=function(a){this.$1.error_message=a;return this};c.setErrorStack=function(a){this.$1.error_stack=a;return this};c.setExitStatus=function(a){this.$1.exit_status=a;return this};c.setIsCommentReply=function(a){this.$1.is_comment_reply=a;return this};c.setIsReplay=function(a){this.$1.is_replay=a;return this};c.setLeaveReason=function(a){this.$1.leave_reason=a;return this};c.setLivingRoomAction=function(a){this.$1.living_room_action=a;return this};c.setLivingRoomID=function(a){this.$1.living_room_id=a;return this};c.setLivingRoomMessageActionType=function(a){this.$1.living_room_message_action_type=a;return this};c.setLivingRoomMessageType=function(a){this.$1.living_room_message_type=a;return this};c.setLivingRoomSurface=function(a){this.$1.living_room_surface=a;return this};c.setManualConfigType=function(a){this.$1.manual_config_type=a;return this};c.setManualCreationSource=function(a){this.$1.manual_creation_source=a;return this};c.setManualGroupID=function(a){this.$1.manual_group_id=a;return this};c.setManualProfileID=function(a){this.$1.manual_profile_id=a;return this};c.setManualSessionID=function(a){this.$1.manual_session_id=a;return this};c.setNullStateHscrollIndex=function(a){this.$1.null_state_hscroll_index=a;return this};c.setNullStateHscrollVideoID=function(a){this.$1.null_state_hscroll_video_id=a;return this};c.setOldScheduledStartTime=function(a){this.$1.old_scheduled_start_time=a;return this};c.setPlaylistID=function(a){this.$1.playlist_id=a;return this};c.setPollID=function(a){this.$1.poll_id=a;return this};c.setQuery=function(a){this.$1.query=a;return this};c.setReactionType=function(a){this.$1.reaction_type=a;return this};c.setSuggestedItemID=function(a){this.$1.suggested_item_id=a;return this};c.setTargetID=function(a){this.$1.target_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimeSpent=function(a){this.$1.time_spent=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoDialogID=function(a){this.$1.video_dialog_id=a;return this};c.setVideoError=function(a){this.$1.video_error=a;return this};c.setVideoEvent=function(a){this.$1.video_event=a;return this};c.setVideoIDMarauder=function(a){this.$1.video_id_marauder=a;return this};c.setVideoOffset=function(a){this.$1.video_offset=a;return this};c.setVideoPlayerFormat=function(a){this.$1.video_player_format=a;return this};c.setVideoState=function(a){this.$1.video_state=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.setXmaClickSameVideo=function(a){this.$1.xma_click_same_video=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={actual_scheduled_start_time:!0,clienttime:!0,comment_body:!0,composer_session_id:!0,content_item_id:!0,curation_context:!0,deviceid:!0,entry_source:!0,error_message:!0,error_stack:!0,exit_status:!0,is_comment_reply:!0,is_replay:!0,leave_reason:!0,living_room_action:!0,living_room_id:!0,living_room_message_action_type:!0,living_room_message_type:!0,living_room_surface:!0,manual_config_type:!0,manual_creation_source:!0,manual_group_id:!0,manual_profile_id:!0,manual_session_id:!0,null_state_hscroll_index:!0,null_state_hscroll_video_id:!0,old_scheduled_start_time:!0,playlist_id:!0,poll_id:!0,query:!0,reaction_type:!0,suggested_item_id:!0,target_id:!0,time:!0,time_spent:!0,vc:!0,video_dialog_id:!0,video_error:!0,video_event:!0,video_id_marauder:!0,video_offset:!0,video_player_format:!0,video_state:!0,weight:!0,xma_click_same_video:!0};e.exports=a}),null);
__d("LivingRoomConstants",[],(function(a,b,c,d,e,f){a={END_SCREEN_CHAINING_TIMEOUT_SECONDS:5,FEED_BLUR_OVERLAY_DELAY_MS:7500,INVITE_FRIENDS_RESULTS_PER_PAGE:20,INVITE_FRIENDS_RESULTS_PER_EXTRA_PAGE:10,NO_VIDEO_RECAP_THUMBNAIL:{uri:"/images/live_video/living_room/no_video_thumbnail.png",width:375,height:250},NUX_CREATE_WITH_CUSTOM_NAME:6218,NUX_FEED_PRESENCE:6358,NUX_HOST_WELCOME:5612,NUX_HOST_WALKTHROUGH:5634,NUX_PRE_POP:5972,NUX_PRESENCE_TRAY:5584,NUX_VIEWER_WELCOME:5594,NUX_PAGE_VIDEO_LIBRARY_BUTTON:6488,TOPIC_CHANNEL_NUX_VIEWER_WELCOME:5814,TOPIC_CHANNEL_NUX_PRESENCE_TRAY:5815,PARTICIPANTS_PAGE_SIZE:20,RECAP_LOAD_SIZE:10,RECAP_REFETCH_PADDING:5,TV_EMOJI:"1f4fa",UPDATE_SUGGESTED_ITEMS:"update_suggested_items",UPDATE_VIDEO_STATE:"update_video_state",VIEWER_REACTION:"viewer_reaction",VIDEO_START_SECONDS:1e-5,VIDEO_SEARCH_DEBOUNCING_DELAY:750,VIDEO_SEARCH_BQF:"keywords_blended_videos",VIDEO_SEARCH_PAGE_BQF:"videos-by",VIDEO_SEARCH_RESULTS_PER_PAGE:20,VIDEO_SEARCH_RESULTS_PER_EXTRA_PAGE:10,SIDE_PANE_WIDTH:400,MIN_MEDIA_CONTAINER_WIDTH:476,MIN_MEDIA_CONTAINER_HEIGHT:560};e.exports=a}),null);
__d("LivingRoomTypeValues",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({DEFAULT:"DEFAULT",ADD_VIDEO:"ADD_VIDEO",ADD_COHOST:"ADD_COHOST",INVITE:"INVITE",QUEUE:"QUEUE"});b=Object.freeze({SEARCH:"SEARCH",RECENT:"RECENT",GROUP:"GROUP",PAGE:"PAGE",LIVE:"LIVE",SAVED:"SAVED",SUGGESTED:"SUGGESTED",AUTO:"AUTO",MAIN:"MAIN",UPLOADED:"UPLOADED",SUBSCRIPTIONS:"SUBSCRIPTIONS"});c=Object.freeze({HIDE:"HIDE",SHOW_SEARCH:"SHOW_SEARCH",SHOW_ADD_BUTTON:"SHOW_ADD_BUTTON",SHOW_SECOND_ADD_DIALOG:"SHOW_SECOND_ADD_DIALOG",SHOW_INVITE:"SHOW_INVITE",SHOW_PREPOP_INVITE:"SHOW_PREPOP_INVITE"});d=Object.freeze({PAGE:"PAGE",USER:"USER"});e.exports={SidePaneTypeValue:a,AddVideoTabValue:b,WalkthroughStepValue:c,OwnerTypeValue:d}}),null);
__d("CommercialBreakHostStoryComponentType",[],(function(a,b,c,d,e,f){a=Object.freeze({POP_OVER_MENU:"POP_OVER_MENU",HOST_STORY_HEADER:"HOST_STORY_HEADER"});e.exports=a}),null);
__d("StoryComponentVideoPlayerControllerRegistry",["CommercialBreakHostStoryComponentType","DOMQuery","EventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("EventEmitter"))(),h=new Map(),i=new Map(),j=new Map();function k(a){a=a;var b=[];while(a)b.unshift(a),a=a.parentElement;return b}function l(a,b){__p&&__p();if(a===null)return null;var c=k(a);a=null;var d=null;b.forEach(function(b){var e=b[0];b=b[1];e=k(e);for(var f=0;f<c.length;++f)if(c[f]!==e[f]){(d===null||f>d)&&(d=f,a=b);break}});return a}a={registerVideoPlayerController:function(a,c){var d=a.getVideoID(),e=h.get(d);e?e.push(a):(e=[a],h.set(d,e));d=null;c===b("CommercialBreakHostStoryComponentType").POP_OVER_MENU?d=this.findPopoverAsyncMenuForVideoPlayerController(a):c===b("CommercialBreakHostStoryComponentType").HOST_STORY_HEADER&&(d=this.findHostStoryControllerForVideoPlayerController(a));if(!d)return;g.emit(d.getInstanceID()+"/register",a)},registerHostStoryController:function(a,b,c){var d=j.get(b);d?d.push(a):(d=[a],j.set(b,d));this.findVideoControllerForStoryController(a,b,c)},registerPopoverAsyncMenu:function(a,b){var c=b.host_video_id;if(!c)return;a=new m(a,b);b=a.getInstanceID();var d=i.get(c);d||(d=[],i.set(c,d));d.push(a);this._informStoryComponentRegister(a.getTriggerElem(),b,c,a.registerVideoPlayerController.bind(a))},_informStoryComponentRegister:function(a,b,c,d){g.addListener(b+"/register",d);d=this.findVideoPlayerControllerForElement(a,c);if(!d)return;g.emit(b+"/register",d)},findVideoPlayerControllerForElement:function(a,b){b=h.get(b);return!b?null:l(a,b.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")}).map(function(a){return[a.getRootNode(),a]}))},findPopoverAsyncMenuForVideoPlayerController:function(a){var b=i.get(a.getVideoID());return!b?null:l(a.getRootNode(),b.map(function(a){return[a.getTriggerElem(),a]}))},findHostStoryControllerForVideoPlayerController:function(a){var c=j.get(a.getVideoID());if(!c)return null;for(var d=0;d<c.length;d++){var e=c[d];if(b("DOMQuery").contains(e.getContainerElement(),a.getRootNode()))return e}return null},findVideoControllerForStoryController:function(a,c,d){__p&&__p();g.addListener(a.getInstanceID()+"/register",d);d=h.get(c);if(!d)return;d=d.filter(function(a){return!a.isState("destroyed")&&!a.isState("fallback")});for(var c=0;c<d.length;c++){var e=d[c];if(b("DOMQuery").contains(a.getContainerElement(),e.getRootNode())){g.emit(a.getInstanceID()+"/register",e);return}}}};var m=function(){__p&&__p();function a(a,b){this._menu=a,this._originalEndpoint=this._menu._endpoint,this._additionalData=b}var b=a.prototype;b.registerVideoPlayerController=function(a){var b=this;a.addListener("commercialBreak/updateOptionMenuURI",function(a){b._updateEndpoint(a)});a.addListener("commercialBreak/recoverOptionMenuURI",function(){return b._updateEndpoint(b._originalEndpoint)})};b._updateEndpoint=function(a){var b=this._menu;b.setMenu(b._loadingMenu);b._setFocus(b._loadingMenu);b._endpoint=a;b._fetched&&(b._fetched=!1,b.fetchMenu())};b.getInstanceID=function(){return this._menu._instanceId.toString()};b.getTriggerElem=function(){return this._menu.getTriggerElem()};b.getOptionsButtonID=function(){return this._additionalData.options_button_id||""};return a}();e.exports=a}),null);