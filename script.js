$(document).ready(

    function () {
        // add event handlers
        $("input[name=days]").click(showSchedule)
        // all functions (program logic)
        function showSchedule(){
            $("#schedule table").hide()
            var selectedDay = $("input[name=days]:checked").val();
            switch (selectedDay){
                case "monday":
                    $("#mon").show()
                    break;
                case "tuesday":
                    $("#tue").show()
                    break;
                case "wednesday":
                    $("#wed").show()
                    break;
                case "thursday":
                    $("#thur").show()
                    break;
                case "friday":
                    $("#fri").show()
                    break;
                case "saturday":
                    $("#sat").show()
                    break;
                default:
                    $("#sun").show()
            }
        }


    }
);