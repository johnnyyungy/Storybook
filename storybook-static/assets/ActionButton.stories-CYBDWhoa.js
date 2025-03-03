import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./index-Ban83id2.js";import{P as i}from"./index-CMHn2Kwa.js";import{s as y}from"./ActionItem.stories.module-CM-bW0rg.js";const e=({children:r,style:d,size:u,disabled:s,onClick:c})=>{const m=`action-button action-button--${d} action-button--${u} ${s?"action-button--disabled":""}`;return t.jsx("button",{className:m,onClick:c,disabled:s,children:r})};e.propTypes={children:i.node.isRequired,style:i.oneOf(["primary","secondary","outline","danger"]).isRequired,size:i.oneOf(["small","medium","large"]).isRequired,disabled:i.bool,onClick:i.func};e.__docgenInfo={description:`A versatile action button component with different styles and states.

@component
@example
<ActionButton style="primary" size="medium" disabled={false}>Click Me</ActionButton>`,methods:[],displayName:"ActionButton",props:{children:{description:"The content of the button.",type:{name:"node"},required:!0},style:{description:"The visual style of the button.",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'outline'",computed:!1},{value:"'danger'",computed:!1}]},required:!0},size:{description:"The size of the button.",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!0},disabled:{description:"Whether the button is disabled.",type:{name:"bool"},required:!1},onClick:{description:"Function to be executed when the button is clicked.",type:{name:"func"},required:!1}}};const b={title:"Components/ActionButton",component:e,argTypes:{}},n=()=>t.jsxs("div",{className:y.container,children:[" ",t.jsx(e,{style:"primary",size:"small",children:"Primary Small"}),t.jsx(e,{style:"primary",size:"medium",children:"Primary Medium"}),t.jsx(e,{style:"primary",size:"large",children:"Primary Large"}),t.jsx(e,{style:"secondary",size:"small",children:"Secondary Small"}),t.jsx(e,{style:"secondary",size:"medium",children:"Secondary Medium"}),t.jsx(e,{style:"secondary",size:"large",children:"Secondary Large"}),t.jsx(e,{style:"outline",size:"small",children:"Outline Small"}),t.jsx(e,{style:"outline",size:"medium",children:"Outline Medium"}),t.jsx(e,{style:"outline",size:"large",children:"Outline Large"}),t.jsx(e,{style:"danger",size:"small",children:"Danger Small"}),t.jsx(e,{style:"danger",size:"medium",children:"Danger Medium"}),t.jsx(e,{style:"danger",size:"large",children:"Danger Large"}),t.jsx(e,{style:"primary",size:"medium",disabled:!0,children:"Disabled Primary"}),t.jsx(e,{style:"secondary",size:"medium",disabled:!0,children:"Disabled Secondary"}),t.jsx(e,{style:"outline",size:"medium",disabled:!0,children:"Disabled Outline"}),t.jsx(e,{style:"danger",size:"medium",disabled:!0,children:"Disabled Danger"})]});n.parameters={docs:{description:{story:"This story showcases all variations of the ActionButton component, including different styles, sizes, and disabled states."}}};n.__docgenInfo={description:"",methods:[],displayName:"AllVariations"};var o,l,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => <div className={styles.container}> {/* Add the container */}
      {/* Primary Style */}
      <ActionButton style="primary" size="small">Primary Small</ActionButton>
      <ActionButton style="primary" size="medium">Primary Medium</ActionButton>
      <ActionButton style="primary" size="large">Primary Large</ActionButton>
  
      {/* Secondary Style */}
      <ActionButton style="secondary" size="small">Secondary Small</ActionButton>
      <ActionButton style="secondary" size="medium">Secondary Medium</ActionButton>
      <ActionButton style="secondary" size="large">Secondary Large</ActionButton>
  
      {/* Outline Style */}
      <ActionButton style="outline" size="small">Outline Small</ActionButton>
      <ActionButton style="outline" size="medium">Outline Medium</ActionButton>
      <ActionButton style="outline" size="large">Outline Large</ActionButton>
  
      {/* Danger Style */}
      <ActionButton style="danger" size="small">Danger Small</ActionButton>
      <ActionButton style="danger" size="medium">Danger Medium</ActionButton>
      <ActionButton style="danger" size="large">Danger Large</ActionButton>
  
      {/* Disabled States */}
      <ActionButton style="primary" size="medium" disabled>Disabled Primary</ActionButton>
      <ActionButton style="secondary" size="medium" disabled>Disabled Secondary</ActionButton>
      <ActionButton style="outline" size="medium" disabled>Disabled Outline</ActionButton>
      <ActionButton style="danger" size="medium" disabled>Disabled Danger</ActionButton>
    </div>`,...(a=(l=n.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const h=["AllVariations"];export{n as AllVariations,h as __namedExportsOrder,b as default};
