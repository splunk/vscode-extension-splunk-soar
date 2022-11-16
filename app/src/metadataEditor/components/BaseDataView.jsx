import React from 'react'
import { VSCodeTextArea, VSCodeTextField } from '@vscode/webview-ui-toolkit/react'

export default function BaseDataView({handleChange, appValues}) {

    const {name, appid, description, product_name, product_vendor, product_version_regex, logo, logo_dark, python_version, app_version, publisher, type, license, package_name, main_module} = appValues

    return (
        <section style={{"display": "flex", "flexDirection": "column", "width": "80%", "gap": "10px"}}>
        <VSCodeTextField onInput={handleChange} name='appid' value={appid} readOnly={true}>App ID</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='name' value={name}>App Name</VSCodeTextField>
        <VSCodeTextArea onInput={handleChange} name='description' value={description}>App Description</VSCodeTextArea>
        <VSCodeTextField onInput={handleChange} name='product_name' value={product_name}>Product Name</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='product_vendor' value={product_vendor}>Product Vendor</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='publisher' value={publisher}>Publisher Vendor</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='product_version_regex' value={product_version_regex}>Product Version Regex</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='type' value={type}>Type</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='license' value={license}>License</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='app_version' value={app_version}>App Version</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='package_name' value={package_name}>Package Name</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='main_module' value={main_module}>Main Module</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='python_version' value={python_version}>Python Version</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='logo' value={logo}>Logo</VSCodeTextField>
        <VSCodeTextField onInput={handleChange} name='logo_dark' value={logo_dark}>Logo Dark</VSCodeTextField>
    </section>
    )
}