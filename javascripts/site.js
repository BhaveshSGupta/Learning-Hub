
function equalHeight() {

    function setEqualHeight_CommonClass(arr) {
        var x = new Array([]);
        $j(arr).each(function (i) {
            $j(this).height('auto');
            x[i] = $j(this).outerHeight();
        });
        Max_Value = Array.max(x);
        $j(arr).each(function (i) {
            //if($j(arr[i]).height() != Max_Value)
            //  {x[i] = $j(arr[i]).height(Max_Value);}
            $j(this).outerHeight(Max_Value);
        });
    }

    function setEqualHeight(arr) {
        var x = new Array([]);
        for (i = 0; i < arr.length; i++) {
            x[i] = $j(arr[i]).height('auto');
            x[i] = $j(arr[i]).outerHeight();
        }
        Max_Value = Array.max(x);
        for (i = 0; i < arr.length; i++) {
            //if($j(arr[i]).height() != Max_Value)
            // {x[i] = $j(arr[i]).height(Max_Value);}
            x[i] = $j(arr[i]).outerHeight(Max_Value);
        }
    }
    Array.min = function (array) {
        return Math.min.apply(Math, array);
    };

    Array.max = function (array) {
        return Math.max.apply(Math, array);
    };
    myObj = $j('.learningHubitem').getSameTopGroups({
        commonParent: '.learningHub'
    }, function (gc) {
        for (i = 1; i <= gc; i++) {
            setEqualHeight_CommonClass('.gg-g-' + i + " .title");
            setEqualHeight_CommonClass('.gg-g-' + i + " .image");
            setEqualHeight_CommonClass('.gg-g-' + i + " .tag");
            setEqualHeight_CommonClass('.gg-g-' + i + " .description");
            setEqualHeight_CommonClass('.gg-g-' + i + " .url");
        }

    });

}
$j(document).ready(function () {
    $j(".mainWrapper").css('min-height', '');
    $j(".mainWrapper").css('min-height', $j(window).height() - 1);

    function loadData(callback) {
        $j.getJSON('https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths', callback);
    }

    var data = [];
    loadData(function (json) {
        data = json;
        $j.each(data.paths, function (i, item) {
            out = "";
            out += "<div class='col-md-12 learningHubitem'><div class='row'>";
            out += "<div class='image col-md-3'><img src='"
            out += item.image;
            out += "'/></div><div class";
             out += "<div class='title'><h2>"
            out += item.name;
            out += "</h2></div>";
             out += "<div class='tag'><p>"
            out += item.tags;
            out += "</p></div>";
            out += "<div class='description col-md-12'><h3>"
            out += item.description;
            out += "</h3></div>"; 
           
             out += "<div class='learner'><p> Learners: "
            out += item.learner;
            out += "</p></div>";
             out += "<div class='hours'><p> Hours: "
            out += item.hours;
            out += "</p></div>";
            out += "<div class='url'>"
            out += "<a href='" + item.sign_up + "' target='_blank' title='Opens in a new window' >View Curriculum</a>";
            out += "</div></div>";
            out += "</div>";
            $j("#learningHub").append(out);
            equalHeight()
        });
        $j(".loader").removeClass("loader");
        console.log(data);
    });
    $j('#ghsearchbtn').on('click', function (e) {
        console.log(data);
    });
});

$j(window).load(function () {
    $j(".mainWrapper").css('min-height', '');
    $j(".mainWrapper").css('min-height', $j(window).height() - 1);
});
$j(window).resize(function () {
    $j(".mainWrapper").css('min-height', '');
    $j(".mainWrapper").css('min-height', $j(window).height() - 1);
});