!function(){"use strict";var e,n={868:function(){var e=window.wp.blocks,n=window.React,r=window.wp.i18n,t=window.wp.blockEditor,o=JSON.parse('{"u2":"block-development-examples/block-static-rendering-b16608"}');(0,e.registerBlockType)(o.u2,{edit:function(){return(0,n.createElement)("p",{...(0,t.useBlockProps)()},(0,r.__)("02 Block with Static Rendering – hello from the editor!","02-block-static"))},save:function(){return(0,n.createElement)("p",{...t.useBlockProps.save()},"02 Block with Static Rendering – hello from the saved content!")}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=function(n,r,o,i){if(!r){var c=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var l=!0,u=0;u<r.length;u++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(l=!1,i<c&&(c=i));if(l){e.splice(s--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,c=r[0],l=r[1],u=r[2],a=0;if(c.some((function(n){return 0!==e[n]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(u)var s=u(t)}for(n&&n(r);a<c.length;a++)i=c[a],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self.webpackChunk_wp_block_development_examples_block_static_rendering_b16608=self.webpackChunk_wp_block_development_examples_block_static_rendering_b16608||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[431],(function(){return t(868)}));o=t.O(o)}();