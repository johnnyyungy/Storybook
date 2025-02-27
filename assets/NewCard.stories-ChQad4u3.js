import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-Ban83id2.js";import"./preview-BkihscKp.js";import"./DocsRenderer-CFRXHY34-DCS4jGmP.js";import"./index-DUuA-hv4.js";import"./iframe-B82TZ7gf.js";import"./react-18-CvbtEhry.js";import"./index-7LVPDKFp.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const s=({title:a,content:g})=>o.jsxs("div",{className:"new-card",children:[o.jsx("h2",{className:"new-card-title",children:a}),o.jsx("p",{className:"new-card-content",children:g})]});s.__docgenInfo={description:"",methods:[],displayName:"NewCard"};const{definePreview:b}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/NewCard",component:s,parameters:{docs:{description:{component:"This is the `NewCard` component."},source:{code:`
import React from 'react';
import './NewCard.css'; 

const NewCard = ({ title, content }) => {
  return (
    <div className="new-card">
      <h2 className="new-card-title">{title}</h2>
      <p className="new-card-content">{content}</p>
    </div>
  );
};

export default NewCard;
        `,language:"jsx"}}}},n=a=>o.jsx(s,{...a}),e=n.bind({});e.args={title:"My New Card",content:"This is the content of my new card."};const t=n.bind({});t.args={title:"Short Content Card",content:"Short content."};const r=n.bind({});r.args={title:"Long Content Card",content:"This is a card with a lot of content, so you can see how the card will behave when the content is very long. This is a card with a lot of content, so you can see how the card will behave when the content is very long."};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"args => <NewCard {...args} />",...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"args => <NewCard {...args} />",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var h,w,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"args => <NewCard {...args} />",...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const O=["Default","ShortContent","LongContent"];export{e as Default,r as LongContent,t as ShortContent,O as __namedExportsOrder,E as default};
