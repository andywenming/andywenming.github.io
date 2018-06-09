function CheckLogin(){
	  var taget_obj = document.getElementById('_ajax_feedback');
	  myajax = new DedeAjax(taget_obj,false,false,'','','');
	  myajax.SendGet2("{dede:global.cfg_cmsurl/}/member/ajax_feedback.php");
	  DedeXHTTP = null;
}
function postBadGood(ftype,fid)
{
	var taget_obj = document.getElementById(ftype+fid);
	var saveid = GetCookie('badgoodid');
	if(saveid != null)
	{
		var saveids = saveid.split(',');
		var hasid = false;
		saveid = '';
		j = 1;
		for(i=saveids.length-1;i>=0;i--)
		{
			if(saveids[i]==fid && hasid) continue;
			else {
				if(saveids[i]==fid && !hasid) hasid = true;
				saveid += (saveid=='' ? saveids[i] : ','+saveids[i]);
				j++;
				if(j==10 && hasid) break;
				if(j==9 && !hasid) break;
			}
		}
		if(hasid) { alert('您刚才已表决过了喔！'); return false;}
		else saveid += ','+fid;
		SetCookie('badgoodid',saveid,1);
	}
	else
	{
		SetCookie('badgoodid',fid,1);
	}
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	myajax.SendGet2("{dede:field name='phpurl'/}/feedback.php?aid="+fid+"&action="+ftype+"&fid="+fid);
}
function postDigg(ftype,aid)
{
	var taget_obj = document.getElementById('newdigg');
	var saveid = GetCookie('diggid');
	if(saveid != null)
	{
		var saveids = saveid.split(',');
		var hasid = false;
		saveid = '';
		j = 1;
		for(i=saveids.length-1;i>=0;i--)
		{
			if(saveids[i]==aid && hasid) continue;
			else {
				if(saveids[i]==aid && !hasid) hasid = true;
				saveid += (saveid=='' ? saveids[i] : ','+saveids[i]);
				j++;
				if(j==20 && hasid) break;
				if(j==19 && !hasid) break;
			}
		}
		if(hasid) { alert("您已经顶过该帖，请不要重复顶帖 ！"); return; }
		else saveid += ','+aid;
		SetCookie('diggid',saveid,1);
	}
	else
	{
		SetCookie('diggid',aid,1);
	}
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	var url = "{dede:global.cfg_phpurl/}/digg_ajax.php?action="+ftype+"&id="+aid;
	myajax.SendGet2(url);
}
function getDigg(aid)
{
	var taget_obj = document.getElementById('newdigg');
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	myajax.SendGet2("{dede:global.cfg_phpurl/}/digg_ajax.php?id="+aid);
	DedeXHTTP = null;
}