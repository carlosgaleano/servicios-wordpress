(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,n=window.React,r=window.wp.blockEditor,s=window.wp.components,i=window.wp.i18n,o=window.wp.serverSideRender;var d=e.n(o);const a=window.bp.blockData,l=[{label:(0,i._x)("Newest","Friends","buddypress"),value:"newest"},{label:(0,i._x)("Active","Friends","buddypress"),value:"active"},{label:(0,i._x)("Popular","Friends","buddypress"),value:"popular"}],u=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bp/friends","title":"Friends List","category":"widgets","icon":"buddicons-friends","description":"A dynamic list of recently active, popular, and newest friends of the post author (when used into a page or post) or of the displayed member (when used in a widgetized area). If author/member data is not available the block is not displayed.","keywords":["BuddyPress","friends","community"],"textdomain":"buddypress","attributes":{"maxFriends":{"type":"number","default":5},"friendDefault":{"type":"string","default":"active"},"linkTitle":{"type":"boolean","default":false},"postId":{"type":"number","default":0}},"supports":{"align":true},"editorScript":"file:index.js","style":"file:index.css"}');(0,t.registerBlockType)(u,{icon:{background:"#fff",foreground:"#d84800",src:"buddicons-friends"},edit:({attributes:e,setAttributes:t})=>{const o=(0,r.useBlockProps)(),{postId:u,maxFriends:p,friendDefault:c,linkTitle:b}=e,f=(0,a.currentPostId)();return!u&&f&&t({postId:f}),(0,n.createElement)("div",{...o},(0,n.createElement)(r.InspectorControls,null,(0,n.createElement)(s.PanelBody,{title:(0,i.__)("Settings","buddypress"),initialOpen:!0},(0,n.createElement)(s.RangeControl,{label:(0,i.__)("Max friends to show","buddypress"),value:p,onChange:e=>t({maxFriends:e}),min:1,max:10,required:!0}),(0,n.createElement)(s.SelectControl,{label:(0,i.__)("Default members to show","buddypress"),value:c,options:l,onChange:e=>{t({friendDefault:e})}}),(0,n.createElement)(s.ToggleControl,{label:(0,i.__)("Link block title to Member's profile friends page","buddypress"),checked:!!b,onChange:()=>{t({linkTitle:!b})}}))),(0,n.createElement)(s.Disabled,null,(0,n.createElement)(d(),{block:"bp/friends",attributes:e})))}})})();