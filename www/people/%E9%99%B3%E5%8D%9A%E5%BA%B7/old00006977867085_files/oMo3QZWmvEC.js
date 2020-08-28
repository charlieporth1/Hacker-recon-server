if (self.CavalryLogger) { CavalryLogger.start_js(["314BA"]); }

__d("TranslationRating",[],(function(a,b,c,d,e,f){e.exports={UNDEFINED:0,VERY_BAD:1,BAD:2,OK:3,GOOD:4,VERY_GOOD:5}}),null);
__d("CommentVoteReactionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,UPVOTE:1,DOWNVOTE:2})}),null);
__d("CommentVoteUIVersion",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:"none",INSIDE_BLING_BAR:"inside_bling_bar",VERTICAL_ON_THE_SIDE:"vertical_on_the_side"})}),null);
__d("FeedbackActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHANGE_ACCEPTED_ANSWER:"fa-type:change-accepted-answer",COMMENT_LIKE:"fa-type:comment-like",COMMENT_REACTION:"fa-type:comment-reaction",COMMENT_SET_SPAM:"fa-type:mark-spam",COMMENT_KEEP_SPAM:"fa-type:keep_spam",COMMENT_APPEAL_SPAM:"fa-type:appeal_spam",COMMENT_SECURE_ACCOUNT:"fa-type:secure_account",COMMENT_VOTE:"fa-type:comment_vote",DELETE_COMMENT:"fa-type:delete-comment",DELETE_COMMENT_REMOVE_COMMENTER:"fa-type:delete_comment_remove_commenter",DISABLE_COMMENTS:"fa-type:disable-comments",LIVE_DELETE_COMMENT:"fa-type:live-delete-comment",LIKE_ACTION:"fa-type:like",SUBSCRIBE_ACTION:"fa-type:subscribe",SHARE_COUNT_UPDATE_ACTION:"fa-type:share_count_update",REMOVE_PREVIEW:"fa-type:remove-preview",MARK_COMMENT_SPAM:"fa-type:mark-spam",MUTE_MEMBER:"fa-type:mute-member",CONFIRM_COMMENT_REMOVAL:"fa-type:confirm-remove",TRANSLATE_COMMENT:"fa-type:translate-comment",TRANSLATE_ALL:"fa-type:translate-all-comments",COMMENT_LIKECOUNT_UPDATE:"fa-type:comment-likecount-update",ADD_COMMENT_ACTION:"fa-type:add-comment",REACTION:"fa-type:reaction",UPDATE_CONSTITUENT_BADGE:"fa-type:comment_update_constituent_title",COMMENT_AUTHOR_PIN_CHANGE:"fa-type:comment_author_pin_change"})}),null);
__d("FeedbackPayloadSourceType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:0,INITIAL_SERVER:1,LIVE_SEND:2,USER_ACTION:3,STREAMING:4,COLLAPSE_ACTION:7,ENDPOINT_LIKE:10,ENDPOINT_COMMENT_LIKE:11,ENDPOINT_ADD_COMMENT:12,ENDPOINT_EDIT_COMMENT:13,ENDPOINT_DELETE_COMMENT:14,ENDPOINT_HIDE_COMMENT:16,ENDPOINT_REMOVE_PREVIEW:17,ENDPOINT_ID_COMMENT_FETCH:18,ENDPOINT_COMMENT_FETCH:19,ENDPOINT_TRANSLATE_COMMENT:20,ENDPOINT_BAN:21,ENDPOINT_SUBSCRIBE:22,ENDPOINT_COMMENT_LIKECOUNT_UPDATE:23,ENDPOINT_DISABLE_COMMENTS:24,ENDPOINT_ACTOR_CHANGE:25,ENDPOINT_REACTION:26,ENDPOINT_PAGES_MODERATION:27,ENDPOINT_COMMENT_REACTION:28,ENDPOINT_COMMENT_ANSWER_ACCEPT:29,ENDPOINT_COMMENT_KEEP_SPAM:30,ENDPOINT_COMMENT_APPEAL_SPAM:31,ENDPOINT_COMMENT_SECURE_ACCOUNT:32,ENDPOINT_DELETE_COMMENT_AND_REMOVE_COMMENTER:33,ENTPOINT_MUTE_MEMBER:34,ENDPOINT_SUBSCRIBE_COMMENT:35,ENDPOINT_HIDE_TEXT_DELIGHTS:36,ENDPOINT_SEND_MESSAGE:37,ENDPOINT_COMMENT_VOTE:38,ENDPOINT_AUTHOR_PINNED_COMMENT:39,ENDPOINT_DELETE_COMMENT_WTH_FEEDBACK:40})}),null);
__d("UFIFeedbackMode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EXPANDED:"expanded",NONE:"none",NEVER:"never",TOGGLE:"toggle"})}),null);
__d("UFIPaging",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TOP:"top",BOTTOM:"bottom",ALL:"all"})}),null);
__d("UFIStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DELETED:"status:deleted",SPAM:"status:spam",SPAM_DISPLAY:"status:spam-display",LIVE_DELETED:"status:live-deleted",FAILED_ADD:"status:failed-add",FAILED_EDIT:"status:failed-edit",PENDING_EDIT:"status:pending-edit"})}),null);
__d("UFIConstants",["FeedbackActionType","CommentVoteReactionType","CommentVoteUIVersion","UFIFeedbackMode","FeedbackSourceType","FeedbackPayloadSourceType","UFIStatus","UFIPaging"],(function(a,b,c,d,e,f){"use strict";a=80;c={UFIActionType:b("FeedbackActionType"),UFICommentVoteType:b("CommentVoteReactionType"),UFICommentVoteUIVersion:b("CommentVoteUIVersion"),UFIFeedbackMode:b("UFIFeedbackMode"),UFIFeedbackSourceType:b("FeedbackSourceType"),UFIPayloadSourceType:b("FeedbackPayloadSourceType"),UFIStatus:b("UFIStatus"),UFIPaging:b("UFIPaging"),attachmentTruncationLength:a,commentTruncationLength:420,commentTruncationMaxLines:3,commentTruncationPercent:.6,commentURLTruncationLength:60,infiniteScrollRangeForQANDAPermalinks:1e3,maxScrollDistanceForAutoScroll:60,minCommentsForOrderingModeSelector:1,unavailableCommentKey:"unavailable_comment_key"};e.exports=c}),null);
__d("UFIRange",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b){a===void 0&&(a=0),b===void 0&&(b=0),this.offset=a,this.length=b,this.requestedOffset=this.offset,this.requestedLength=this.length}var b=a.prototype;b.getOffset=function(){return this.offset};b.getLength=function(){return this.length};b.getRequestedOffset=function(){return this.requestedOffset};b.getRequestedLength=function(){return this.requestedLength};b.updateRequestedRange=function(a,b){this.requestedOffset=a;this.requestedLength=b;return this};b.isLoadingNext=function(){var a=this.requestedOffset+this.requestedLength,b=this.offset+this.length;return a>b};b.isLoadingPrev=function(){return this.requestedOffset<this.offset};a.combine=function(b,c){__p&&__p();if(!c)return b;var d=Math.min(b.getOffset(),c.getOffset());b=Math.max(b.getLength(),c.getLength());var e=new a(d,b);if(c.getRequestedLength()>0){var f=Math.min(d,c.getRequestedOffset());d=Math.max(d+b,c.getRequestedOffset()+c.getRequestedLength());e.updateRequestedRange(f,d-f)}return e};return a}();e.exports=a}),null);
__d("UFIFeedbackStore",["FluxReduceStore","UFIDispatcherBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return{}};c.reduce=function(a,b){var c;switch(b.type){case"instance_init":var d=b.payload;d=d.feedbacktarget?d.feedbacktarget:d.feedbacktargets&&d.feedbacktargets[0];return!d?a:babelHelpers["extends"]({},a,(c={},c[b.ftentidentifier]=babelHelpers["extends"]({orderingmodes:[],defaultcommentorderingmode:""},d),c))}return a};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("UFIOrderingModeStore",["invariant","FluxReduceStore","UFIDispatcherBase","UFIFeedbackStore"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,b){return a.filter(function(a){return a.selected}).map(function(a){return a.value}).pop()||b}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new Map()};d.areEqual=function(a,b){return a===b};d.isLiveStreaming=function(a){return this.getState().get(a)=="live_streaming"};d.isInverted=function(a,c){__p&&__p();var d=!1;c=b("UFIFeedbackStore").getState()[c];if(c){c=c.orderingmodes.filter(function(a){return a.selected}).pop();c&&(d=c.isBottomUpVideoCommentSreamingEnabled)}switch(a){case"recent_activity":case"ranked_threaded":case"ranked_unfiltered":case"live_streaming":return!d}return!1};d.getOrderingMode=function(a){a=this.getState().get(a);a!==void 0||g(0,2896);return a};d.reduce=function(a,c){__p&&__p();switch(c.type){case"instance_init":if(a.has(c.instanceID))return a;b("UFIDispatcherBase").waitFor([b("UFIFeedbackStore").getDispatchToken()]);var d=b("UFIFeedbackStore").getState()[c.ftentidentifier];a=new Map(a);return a.set(c.instanceID,h(d.orderingmodes,d.defaultcommentorderingmode));case"story_change_order_mode":(!a.has(c.instanceID)||a.get(c.instanceID)!==c.mode)&&(a=new Map(a),a.set(c.instanceID,c.mode));return a}return a};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("ProfileBrowserLink",["URI"],(function(a,b,c,d,e,f){var g,h="/ajax/browser/dialog/",i="/browse/",j=function(a,c,d){return new(g||(g=b("URI")))(a+c).setQueryData(d)};a={constructPageURI:function(a,b){return j(i,a,b)},constructDialogURI:function(a,b){return j(h,a,b)}};e.exports=a}),null);
__d("ProfileBrowserTypes",[],(function(a,b,c,d,e,f){a=Object.freeze({EXTERNALTASK_SUBSCRIBERS:"task_subscribers",FRIEND_CHECKINS:"friendcheckins",FRIENDED_FANS_OF:"friended_fans_of",GROUP_FRIEND_MEMBERS:"group_friend_members",GROUP_JOIN_REQUESTERS_FRIENDS_IN_GROUP:"group_join_requesters_friends_in_group",GROUP_MEMBERS:"group_members",GROUP_MESSAGE_VIEWERS:"group_message_viewers",LIKES:"likes",LIVE_VIDEO_VIEWERS:"live_video_viewers",MUTUAL_FRIENDS:"mutual_friends",OPTION_VOTERS:"option_voters",PAGE_FEATURED_ADMINS:"featured_admins",WORK_ADMIN_GROUP_ADMINS:"work_admin_group_admins",WORK_ADMIN_GROUP_MEMBERS:"work_admin_group_members"});e.exports=a}),null);
__d("UFIImageBlock.react",["cx","ImageBlock.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("ImageBlock.react"),babelHelpers["extends"]({},this.props,{imageClassName:"UFIImageBlockImage",contentClassName:"UFIImageBlockContent",children:this.props.children}))};return c}(b("React").Component);e.exports=a}),null);
__d("UFIPager.react",["cx","LeftRight.react","React","SutroBlingBarGatingConfig","UFIImageBlock.react","XUISpinner.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.onPagerClick=function(a){!c.props.isLoading&&c.props.onPagerClick&&c.props.onPagerClick(),a.nativeEvent.prevent()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.onPagerClick,c=b("SutroBlingBarGatingConfig").enabled,d=b("joinClasses")("UFIRow"+(this.props.isUnseen?" UFIUnseenItem":"")+" UFIPagerRow _4oep"+(this.props.isFirstCommentComponent?" _48pi":"")+(this.props.isLastCommentComponent?" UFILastCommentComponent":"")+(this.props.isFirstComponent||c&&this.props.isFirstCommentComponent?" _4204":"")+(this.props.isLastComponent?" _2o9m":"")),e=null;this.props.isLoading&&(e=b("React").jsx(b("XUISpinner.react"),{className:"mls",background:"light",size:"small"}));e=b("React").jsxs("a",{className:"UFIPagerLink",onClick:a,href:"#",role:"button",children:[this.props.pagerLabel,e]});var f="fcg UFIPagerCount";c=c&&b("React").jsx("span",{className:f,children:this.props.countSentence});this.props.contextArgs.entstream||!this.props.isReply?f=b("React").jsxs(b("LeftRight.react"),{direction:b("LeftRight.react").DIRECTION.right,children:[e,c]}):f=b("React").jsxs(b("UFIImageBlock.react"),{children:[b("React").jsx("a",{className:"UFIPagerIcon",onClick:a,href:"#",role:"button"}),e,c]});return b("React").jsx("div",{className:d,"data-ft":this.props["data-ft"],children:f})};return c}(b("React").Component);e.exports=a}),null);
__d("UFIPagerLabel",["fbt","NumberFormat"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){return b("NumberFormat").formatInteger(a.count)}var i={VIEW_ONE:"view_one",VIEW_ONE_MORE:"view_one_more",VIEW_ALL:"view_all",VIEW_MORE_EXPLICIT:"view_more_explicit",VIEW_MORE:"view_more",VIEW_PREVIOUS:"view_previous",VIEW_PREVIOUS_EXPLICIT:"view_previous_explicit",_getReplyLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("View 1 reply");case i.VIEW_ONE_MORE:return g._("View 1 more reply");case i.VIEW_ALL:return g._({"*":"View all {count} replies"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"View {count} more replies","_1":"View {count} more reply"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("View more replies");case i.VIEW_PREVIOUS:return g._("View previous replies");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"View {count} previous replies","_1":"View {count} previous reply"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);default:return null}},_getCommentLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("View 1 comment");case i.VIEW_ONE_MORE:return g._("View 1 more comment");case i.VIEW_ALL:return g._({"*":"View all {count} comments"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"View {count} more comments","_1":"View {count} more comment"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("View more comments");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"View {count} previous comments","_1":"View {count} previous comment"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_PREVIOUS:return g._("View previous comments");default:return null}},_getCommentLabelWithHiddenCommentCount:function(a,b){switch(a){case i.VIEW_ONE:return g._("See comments");case i.VIEW_ALL:return g._("See all comments");case i.VIEW_ONE_MORE:case i.VIEW_MORE_EXPLICIT:case i.VIEW_MORE:return g._("See more comments");case i.VIEW_PREVIOUS_EXPLICIT:case i.VIEW_PREVIOUS:return g._("See previous comments");default:return null}},_getQuestionLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("View 1 question");case i.VIEW_ONE_MORE:return g._("View 1 more question");case i.VIEW_ALL:return g._({"*":"View all {count} questions"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"View {count} more questions","_1":"View {count} more question"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("View more questions");case i.VIEW_PREVIOUS:return g._("View previous questions");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"View {count} previous questions","_1":"View {count} previous question"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);default:return null}},_getAnswerLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("View 1 answer");case i.VIEW_ONE_MORE:return g._("View 1 more answer");case i.VIEW_ALL:return g._({"*":"View all {count} answers"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"View {count} more answers","_1":"View {count} more answer"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("View more answers");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"View {count} previous answers","_1":"View {count} previous answer"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_PREVIOUS:return g._("View previous answers");default:return null}},getLabel:function(a,b,c){if(b)return i._getReplyLabel(a,c);else return c.hideCount?i._getCommentLabelWithHiddenCommentCount(a,c):i._getCommentLabel(a,c)}};e.exports=i}),null);
__d("UFIPagerGenerator",["fbt","NumberFormat","React","TrackingNodes","UFIConstants","UFIOrderingModeStore","UFIPager.react","UFIPagerLabel","UFIRange"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("UFIConstants").UFIPaging;a={isBottomPager:function(a,c,d){return b("UFIOrderingModeStore").isInverted(c,d)&&!a},needsStartOfRangePager:function(a){return a>0},renderPagers:function(a){__p&&__p();var c=a.commentCount,d=a.contextArgs,e=a.currentLength,f=a.currentOffset,i=a.deletedCount,j=a.feedback,k=a.hideCount,l=a.onPageCallback,m=a.orderingMode,n=a.range;a=a.targetID;var o=c-i;i=e-i;var p=a!==d.ftentidentifier,q=this.isBottomPager(p,m,a);m={topPager:null,bottomPager:null};var r=n.isLoadingPrev();n=n.isLoadingNext();k={count:0,hideCount:k};var s=f+e==c;if(c<d.pagesize&&s||i===0){var t=Math.min(c,d.pagesize);s=function(){return l(q?h.BOTTOM:h.TOP,new(b("UFIRange"))(c-t,t))};var u;i===0?o==1?u=b("UFIPagerLabel").VIEW_ONE:(k.count=o,u=b("UFIPagerLabel").VIEW_ALL):o-i==1?u=b("UFIPagerLabel").VIEW_ONE_MORE:(u=b("UFIPagerLabel").VIEW_MORE_EXPLICIT,k.count=o-i);var v=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.VIEW_ALL_COMMENTS);u=b("UFIPagerLabel").getLabel(u,p,k);j=b("React").jsx(b("UFIPager.react"),{ref:q?"topLevelBottomPager":null,contextArgs:d,isUnseen:j.hasunseencollapsed,isLoading:q?n:r,isReply:p,pagerLabel:u,onPagerClick:s,"data-ft":v},"allPager"+a);q?m.bottomPager=j:m.topPager=j;return m}u=b("UFIPagerLabel").getLabel(b("UFIPagerLabel").VIEW_MORE,p,k);s=b("UFIPagerLabel").getLabel(b("UFIPagerLabel").VIEW_PREVIOUS,p,k);if(this.needsStartOfRangePager(f)){var w=Math.max(f-d.pagesize,0),x=f+e-w,y;if(!p||i>1){v=b("NumberFormat").formatInteger(i);j=b("NumberFormat").formatInteger(o);y=g._("{countshown} of {totalcount}",[g._param("countshown",v),g._param("totalcount",j)])}k=function(){return l(q?h.BOTTOM:h.TOP,new(b("UFIRange"))(w,x))};q?m.bottomPager=b("React").jsx(b("UFIPager.react"),{ref:p?null:"topLevelBottomPager",contextArgs:d,isLoading:r,isReply:p,pagerLabel:u,onPagerClick:k,countSentence:y},"bottomPager"+a):m.topPager=b("React").jsx(b("UFIPager.react"),{contextArgs:d,isLoading:r,isReply:p,pagerLabel:s,onPagerClick:k,countSentence:y},"topPager"+a)}if(f+e<c){var z=Math.min(e+d.pagesize,c-f);i=function(){return l(q?h.TOP:h.BOTTOM,new(b("UFIRange"))(f,z))};q?m.topPager=b("React").jsx(b("UFIPager.react"),{contextArgs:d,isLoading:n,isReply:p,pagerLabel:s,onPagerClick:i},"topPager"+a):m.bottomPager=b("React").jsx(b("UFIPager.react"),{ref:p?null:"topLevelBottomPager",contextArgs:d,isLoading:n,isReply:p,pagerLabel:u,onPagerClick:i},"bottomPager")}return m}};e.exports=a}),null);
__d("UFICommentFilterFallbackWarning.react",["cx","fbt","React","UFIPagerGenerator","distinctArrayBy"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function i(a,c,d){var e=c.availableComments;c=c.repliesMap;d?d=c[a]||[]:d=e||[];d=b("distinctArrayBy")(d,function(a){return a.id});return d.length}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.shouldRender=function(a,c,d,e){__p&&__p();if(!a)return!1;var f=a.availableComments,g=a.commentCounts,h=a.deletedCounts,j=a.hasPagedToplevel,k=a.orderingMode,l=a.ranges,m=a.repliesExpandedMap,n=a.repliesMap;if(!f||!g||!h||!k||!l||!m||!n)return!1;f=Math.max((g[c]||0)-(h[c]||0),0);n=l[c];if(!n||!f||k!=="ranked_threaded"||e&&!m[c]||!e&&!j)return!1;g=i(c,a,e);h=n.isLoadingPrev();l=n.isLoadingNext();m=n.getOffset();j=n.getLength();a=b("UFIPagerGenerator").isBottomPager(e,k,c);n=Math.min(j,f);if(d==="all")return!h&&!l&&m===0&&j>=f&&g<n;else if(!a&&d==="top"||a&&d==="bottom")return!h&&m===0&&g<n;else if(!a&&d==="bottom"||a&&d==="top")return!l&&m+j>=f&&g<n;return!1};var d=c.prototype;d.$1=function(){__p&&__p();var a=this.props,b=a.asReplyWarning;a=a.ufiProps;a=a||{};var c=a.feedback,d=a.orderingMode;a=c&&c.orderingmodes||[];c=a.find(function(a){return a&&a.value===d});a=c&&c.name;if(b)if(a)return h._("{ordering mode name} is selected, so some replies may have been filtered out.",[h._param("ordering mode name",a)]);else return h._("Some replies may have been filtered out by the selected ordering mode.");else if(a)return h._("{ordering mode name} is selected, so some comments may have been filtered out.",[h._param("ordering mode name",a)]);else return h._("Some comments may have been filtered out by the selected ordering mode.")};d.render=function(){var a=this.props,c=a.ufiProps,d=a.targetID,e=a.pagingDirection;a=a.asReplyWarning;return!this.constructor.shouldRender(c,d,e,a)?null:b("React").jsx("div",{className:"_2ah8 _4oep UFIRow",children:b("React").jsx("div",{className:"_2ah9",children:this.$1()})})};return c}(b("React").Component);e.exports=a}),null);
__d("ContentTranslationStrings",["fbt","TranslationRating"],(function(a,b,c,d,e,f,g){__p&&__p();a={SEE_TRANSLATION:g._("See Translation"),SEE_TRANSLATION_TIP:g._("Translate this comment"),NO_TRANSLATION_AVAILABLE:g._("No translation available"),AUTOMATICALLY_TRANSLATED:g._("Automatically Translated"),HIDE_ORIGINAL:g._("Hide original"),SEE_ORIGINAL:g._("See original"),SEE_ORIGINAL_LINK:g._("See Original"),UNDO:g._("Undo"),CANCEL:g._("Cancel"),SUBMIT:g._("Submit"),DONE:g._("Done"),CLOSE:g._("Close"),SEARCH:g._("Search"),ENTER_TRANSLATION:g._("Type your translation here"),EDIT_TRANSLATION_THANKS:g._("Thank you! Your feedback helps us improve our translation quality."),EDIT_TRANSLATION_DIALOG_TITLE_ERROR:g._("Submission Unsuccessful"),EDIT_TRANSLATION_MENU:g._("I have a better translation"),RATE_TRANSLATION:g._("Rate this translation"),I_DONT_KNOW:g._("I don't know"),NO_MATCHING_LANGUAGES:g._("No matching languages"),LANGUAGE_SETTINGS:g._("Language settings"),CLICK_TO_RATE:g._("Click a star to rate"),TAP_TO_RATE:g._("Tap a star to rate"),ORIGINAL_TEXT:g._("Original text:"),YOUR_TRANSLATION:g._("Your translation:"),SETTINGS_SAVED:g._("Language settings successfully saved."),REPORT_LANGUAGE_THANKS_FACEBOOK:g._("Thank you for letting us know about this error. Your feedback improves translation for everyone on Facebook."),REPORT_LANGUAGE_THANKS_WORKPLACE:g._("Thank you for letting us know about this error. Your feedback improves translation for everyone on Workplace."),LANGUAGE_SETTINGS_REMINDER:g._("You can change this at any time in your language settings."),CROWDSOURCING_TARGET_DIALECT_DIALOG:g._("Settings"),TRANSLATE_ALL_TEXT:g._("Translate All Comments"),NUM_TRANSLATIONS_TEXT:g._("translations"),getTranslatedFromTo:function(a,b){return g._("Translated from {source language} to {target language}",[g._param("source language",a),g._param("target language",b)])},getTranslatedFrom:function(a){return g._("Translated from {source language}",[g._param("source language",a)])},getReportLanguageDialogBody:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Are you sure this content was not in {language}?",[g._param("language",a)]):g._("Are you sure this post was not in {language}?",[g._param("language",a)])},getReportLanguage:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Content was not in {language}",[g._param("language",a)]):g._("Post was not in {language}",[g._param("language",a)])},getReportLanguageSelector:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("This content was actually in: {language selector}",[g._param("language selector",a)]):g._("This post was actually in: {language selector}",[g._param("language selector",a)])},getNeverTranslate:function(a){return g._("Never translate {language}",[g._param("language",a)])},getNeverTranslateDialog:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Are you sure? Content in {language} won't be translated for you.",[g._param("language",a)]):g._("Are you sure? Posts in {language} won't be translated for you.",[g._param("language",a)])},getDisableAutoTranslate:function(a){return g._("Disable automatic translation for {dialect}",[g._param("dialect",a)])},getDisableAutoTranslateDialog:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Are you sure? Content in {language} won't be automatically translated for you.",[g._param("language",a)]):g._("Are you sure? Posts in {dialect} won't be automatically translated for you.",[g._param("dialect",a)])},getUserFeedbackTitleForScore:function(a){switch(a){case b("TranslationRating").VERY_BAD:return g._("Very bad.");case b("TranslationRating").BAD:return g._("Bad.");case b("TranslationRating").OK:return g._("OK.");case b("TranslationRating").GOOD:return g._("Good.");case b("TranslationRating").VERY_GOOD:return g._("Very good.");default:return null}},getUserFeedbackDescriptionForScore:function(a){switch(a){case b("TranslationRating").VERY_BAD:return g._("I can't understand anything.");case b("TranslationRating").BAD:return g._("I can't understand most of this.");case b("TranslationRating").OK:return g._("I can understand enough of this.");case b("TranslationRating").GOOD:return g._("I can understand most of this.");case b("TranslationRating").VERY_GOOD:return g._("I can understand everything.");default:return null}}};e.exports=a}),null);
__d("XLtgPostTranslationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/see_translation/",{ftid:{type:"String",required:!0},text_size:{type:"Enum",defaultValue:"medium",enumType:1},data_ft:{type:"String"},tn:{type:"String"}})}),null);
__d("highlight",["Animation","Style"],(function(a,b,c,d,e,f){function a(a,c,d,e){new(b("Animation"))(a).from("background",e||"#fff9d7").to("background",d||"#fff").ease(b("Animation").ease.both).duration(2e3).ondone(function(){b("Style").set(a,"background",""),c&&c()}).go()}e.exports=a}),null);
__d("LtgPostTranslation",["cx","Arbiter","AsyncRequest","ContentTranslationStrings","DOM","Event","LoadingIndicator.react","React","ReactDOM","XLtgPostTranslationController","collectDataAttributes","ge","highlight"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={_renderTranslation:function(a,c){if(!a||!a.parentNode)return;var d=b("DOM").create("div",{className:"_63tb"},c||b("ContentTranslationStrings").NO_TRANSLATION_AVAILABLE);b("DOM").replace(a,d);c&&b("highlight")(d)},bindListener:function(a,c){__p&&__p();var d=this;b("Event").listen(a,"click",function(e){__p&&__p();e.prevent();var f=b("ge")("translationSpinnerPlaceholder_"+c);f&&b("ReactDOM").render(b("React").jsx(b("LoadingIndicator.react"),{size:"small",color:"white"}),f);f=e.getTarget();e=b("collectDataAttributes")(f,["ft"]);f=b("XLtgPostTranslationController").getURIBuilder().setString("ftid",c).setString("data_ft",JSON.stringify(e.ft)).getURI();new(b("AsyncRequest"))().setURI(f).setHandler(function(c){c=c.getPayload();d._renderTranslation(a,c&&c.text);b("Arbiter").inform("ufi/translationRendered")}).setErrorHandler(function(){d._renderTranslation(a,null)}).send()})}};e.exports=a}),null);
__d("SphericalMediaGyroOverlay.react",["cx","CSS","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=800,i=function(a,b,c){b===void 0&&(b=!0);c===void 0&&(c=!1);return{gyroRoot:"_1zvy"+(a?" _2dz7":"")+(b?" _4z8s":"")+(c?" _4z8p":""),gyroOuter:"_4z8q",gyroInner:"_4z8r",gyroMeridian:"_4z8t",gyroEquator:"_4z8u",gyroTextShell:"_4z8v",gyroText:"_4z8w"}};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidUpdate=function(a){var c=this;if(a.isActive&&!this.props.isActive)setTimeout(function(){var a=b("ReactDOM").findDOMNode(c);a instanceof Element&&b("CSS").hide(a)},h);else if(!this.props.isActive){a=b("ReactDOM").findDOMNode(this);a instanceof Element&&b("CSS").hide(a)}};d.componentDidMount=function(){if(!this.props.isActive){var a=b("ReactDOM").findDOMNode(this);a instanceof Element&&b("CSS").hide(a)}};d.render=function(){var a=this.props,c=a.className,d=a.isActive,e=a.isInfinite;a=a.isPaused;d=i(d,e,a);return(e=b("React")).jsx("div",{className:b("joinClasses")(c,d.gyroRoot),children:e.jsxs("div",{className:d.gyroOuter,children:[e.jsxs("div",{className:d.gyroInner,children:[e.jsx("div",{className:d.gyroMeridian}),e.jsx("div",{className:d.gyroEquator})]}),e.jsx("div",{className:d.gyroTextShell,children:e.jsx("span",{className:d.gyroText,children:"360"})})]})})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("ResizeListener",["EventListener","SubscriptionList","requestAnimationFrame"],(function(a,b,c,d,e,f){"use strict";var g,h=!1,i=new(b("SubscriptionList"))(function(){g=b("EventListener").listen(window,"resize",j)},function(){g.remove()});function j(){h||(h=!0,b("requestAnimationFrame")(function(){i.fireCallbacks(),h=!1}))}e.exports=i}),null);
__d("URLSearchParams",[],(function(a,b,c,d,e,f){__p&&__p();var g=/\+/g,h=/[!\'()*]/g,i=/%20/g;function j(a){return encodeURIComponent(a).replace(i,"+").replace(h,function(a){return"%"+a.charCodeAt(0).toString(16)})}function k(a){return decodeURIComponent((a=a)!=null?a:"").replace(g," ")}var l=typeof Symbol==="function"?Symbol.iterator:"@@iterator";a=function(){"use strict";__p&&__p();function a(a){a===void 0&&(a="");a=a;a[0]==="?"&&(a=a.substr(1));this.$1=a.length?a.split("&").map(function(a){a=a.split("=");var b=a[0];a=a[1];return[k(b),k(a)]}):[]}var b=a.prototype;b.append=function(a,b){this.$1.push([a,String(b)])};b["delete"]=function(a){for(var b=0;b<this.$1.length;b++)this.$1[b][0]===a&&(this.$1.splice(b,1),b--)};b.entries=function(){return this.$1[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b.get=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return this.$1[b][1];return null};b.getAll=function(a){var b=[];for(var c=0,d=this.$1.length;c<d;c++)this.$1[c][0]===a&&b.push(this.$1[c][1]);return b};b.has=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return!0;return!1};b.keys=function(){var a=this.$1.map(function(a){var b=a[0];a[1];return b});return a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b.set=function(a,b){var c=!1;for(var d=0;d<this.$1.length;d++)this.$1[d][0]===a&&(c?(this.$1.splice(d,1),d--):(this.$1[d][1]=String(b),c=!0));c||this.$1.push([a,String(b)])};b.toString=function(){return this.$1.map(function(a){var b=a[0];a=a[1];return j(b)+"="+j(a)}).join("&")};b.values=function(){var a=this.$1.map(function(a){a[0];a=a[1];return a});return a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]()};b[l]=function(){return this.entries()};return a}();e.exports=a}),null);