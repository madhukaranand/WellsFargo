app.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');
            return function postLink(scope, element, attrs) {
                // default properties
                //attrs.duration = (!attrs.duration) ? '300ms' : attrs.duration;
               // attrs.easing = (!attrs.easing) ? 'linear' : attrs.easing;
                angular.element("span.actionLabel").hide(300);
                
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target = document.querySelector(attrs.slideToggle);
            attrs.expanded = false;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    angular.element('#slidePanel').addClass("expanded");
                    angular.element(".content").addClass("expandedContent");
                    angular.element("span.actionLabel").show(300);
                    
                    
                } else {
                    angular.element('#slidePanel').removeClass("expanded");
                    angular.element(".content").removeClass("expandedContent");
                    angular.element("span.actionLabel").hide(300);
                    
                }
                attrs.expanded = !attrs.expanded;

            });
        }
    }
})

.directive('tabActive', function() {
    return {
        link: function(scope, element, attrs) {
            //var target = document.querySelector(attrs.slideToggle);
            //attrs.expanded = false;
            element.bind('click', function() {
                console.log("dddd");
                var content = target.querySelector('.nav > li');
                element.addClass(active);
                angular.element('#slidePanel').removeClass("expanded");
            });
        }
    }
});
