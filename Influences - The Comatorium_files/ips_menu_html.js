var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*-------------------------------------------------------------------------*/
// IPS BASIC MENU CLASS (EXTENSION: BUILD SIMPLE MENU)
// (c) 2005 Invision Power Services, Inc
// Assumes that "ips_menu.js" has been loaded
/*-------------------------------------------------------------------------*/

//----------------------------------
// INIT some CSS classes
//----------------------------------

var css_mainwrap     = 'popupmenu';
var css_menusep      = 'popupmenu-item';
var css_menusep_last = 'popupmenu-item-last';

//----------------------------------
// INIT some images
//----------------------------------

var img_item   = "<img src='" + ipb_var_image_url + "/menu_item.gif' border='0' alt='V' style='vertical-align:middle' />";
var img_action = "<img src='" + ipb_var_image_url + "/menu_item2.gif' border='0' alt='V' />";

/*-------------------------------------------------------------------------*/
// Return formed image
/*-------------------------------------------------------------------------*/

function make_image( img )
{
	return "<img src='" + ipb_var_image_url + "/" + img + "' border='0' alt='-' class='ipd' />";
}

/*-------------------------------------------------------------------------*/
// menu_build_menu
// cid: ID of opener object (img, div, etc)
// menuinput: Array of menu entries | Variable of menu HTML
// complexmenu: Treat as HTML stream if true, else treat as array of HTML
/*-------------------------------------------------------------------------*/

function menu_build_menu(cid, menuinput, complexmenu)
{
	var html = "\n<div class='" + css_mainwrap + "' id='" + cid + "_menu' style='display:none;z-index:100'>\n";
	
	if ( ! complexmenu )
	{
		len = parseInt(menuinput.length);
		
		if ( len > 0 )
		{
			for( var i=0; i< menuinput.length; i++ )
			{
				t = parseInt(i) + 1;
				
				thisclass = ( t == len ) ? css_menusep_last : css_menusep;
				
				if ( menuinput[i].match( /^~~NODIV~~/ ) )
				{
					html += menuinput[i].replace( /^~~NODIV~~/, '' );
				}
				else
				{
					html += "<div class='" + thisclass + "'>\n" + menuinput[i] + "\n</div>\n";
				}
			}
		}
	}
	else
	{
		html += menuinput;
	}
	
	html += "\n</div>\n";
	
	//----------------------------------
	// Workaround for IE bug which shows
	// select boxes and other windows GUI
	// over divs. Write iframe
	//----------------------------------
	
	if ( is_ie )
	{
		html += "\n"+'<iframe id="if_' + cid + '" src="' + ipb_var_image_url + '/iframe.html" scrolling="no" frameborder="1" style="position:absolute;top:0px;left:0px;display:none;"></iframe>'+"\n";
	}
	
	//----------------------------------
	// Write the html
	//----------------------------------
	
	if ( html != '' )
	{
		document.getElementById( cid ).parentNode.innerHTML += html;		
	}
	
	//----------------------------------
	// Register and init
	//----------------------------------
	
	ipsmenu.dynamic_register[ ipsmenu.dynamic_register.length + 1 ]  = cid;
}





}
/*
     FILE ARCHIVED ON 22:40:18 Sep 30, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:59:37 Nov 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 136.957
  exclusion.robots: 0.135
  exclusion.robots.policy: 0.122
  cdx.remote: 0.09
  esindex: 0.014
  LoadShardBlock: 76.476 (3)
  PetaboxLoader3.datanode: 63.687 (4)
  PetaboxLoader3.resolve: 59.534 (2)
  load_resource: 55.742
*/