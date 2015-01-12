/*
 * This file is part of Fork CMS.
 *
 * For the full copyright and license information, please view the license
 * file that was distributed with this source code.
 */

/**
 * Interaction for the projects module
 *
 * @author Bart De Clercq <info@lexxweb.be>
 * @author Bram De Smyter <bram@bubblefish.be>
 */
jsFrontend.projectsDetail =
{
	// constructor
	init: function()
	{
        //--Initialize colorbox to the gallery
        $('.colorbox').colorbox({
			rel:'group', 
			transition:'elastic', 
			preloading:'true', 
			closebutton:'true', 
			maxHeight: '80%', 
			maxWidth: '80%',
			fixed: 'true',
        		scrolling:'false',
        		onOpen: function(){
             			$("#cboxPhoto").css("opacity", 0);
                	},
        		onComplete: function(){
             			$("#cboxPhoto").animate({"opacity": 1});
        		}
	});

	}
}

$(jsFrontend.projectsDetail.init);
