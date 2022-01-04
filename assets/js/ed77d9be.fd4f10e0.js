"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[442],{445:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var l=n(5339),i=n(7318),s=(n(9231),n(4852)),a=["components"],r={sidebar_position:1e3},o="Custom Field",u={unversionedId:"Fields/CustomField",id:"Fields/CustomField",title:"Custom Field",description:"You can create custom field",source:"@site/docs/Fields/CustomField.md",sourceDirName:"Fields",slug:"/Fields/CustomField",permalink:"/visual-editor/docs/Fields/CustomField",editUrl:"https://github.com/boxraiser/visual-editor/tree/main/docs/docs/Fields/CustomField.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"TextAlign",permalink:"/visual-editor/docs/Fields/TextAlign"},next:{title:"Row",permalink:"/visual-editor/docs/Fields/Layout/Row"}},d=[],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"custom-field"},"Custom Field"),(0,s.kt)("p",null,"You can create custom field "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AbstractField } from '@boxraiser/visual-editor'\n\n/**\n * @property args Field arguments merged with default \n */\nexport class MyCustomField extends AbstractField {\n\n  // Set the default arguments for this field\n  get defaultArgs() {\n    return {\n      multiline: true,\n      allowHeadings: false,\n      default: '', // Set the default value for this field\n    }\n  }\n\n  /**\n   * Function used to render the field\n   * @param {T} value The value set by the user\n   * @param {(T) => void} onChange A callback to call when the value change (expect the value as a parameter)\n   * @returns {JSX.Element}\n   */\n  field({ value, onChange }) {\n    return (\n      <Field label={this.args.label} help={this.args.help}>\n        <div className={Styles.HTMLText}>\n          <QuillEditor\n            value={value || ''}\n            onChange={onChange}\n            mode={this.fieldType()}\n            colors={this.args.colors}\n          />\n        </div>\n      </Field>\n    )\n  }\n}\n")),(0,s.kt)("p",null,"Then, you can use your field when creating new blocks"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"// The arguments will be merged with the default arguments\nnew MyCustomField('title', {\n  label: 'Title',\n  default: 'Pro',\n  multiline: false,\n})\n")))}m.isMDXComponent=!0}}]);