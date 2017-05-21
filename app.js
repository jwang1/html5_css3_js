(function(angular) {
    angular.module("RegExApp", [])
    .controller("RegExController", RegExController);

    RegExController.$inject = ['$scope', '$filter', '$injector'];

    function RegExController($scope, $filter, $injector) {
        // from 
        $scope.regexText = "https://en.wikipedia.org/wiki/Romeo_and_Juliet "
        + "Romeo and Juliet ranks with Hamlet as one of Shakespeare's most performed plays.[101] Its many adaptations have made it one of his most enduring and famous stories.[101] Even in Shakespeare's lifetime, it was extremely popular. Scholar Gary Taylor measures it as the sixth most popular of Shakespeare's plays, in the period after the death of Christopher Marlowe and Thomas Kyd but before the ascendancy of Ben Jonson during which Shakespeare was London's dominant playwright.[102] The date of the first performance is unknown. The First Quarto, printed in 1597, says that "
        + "it hath been often (and with great applause) plaid publiquely, " 
        + "setting the first performance before that date. The Lord Chamberlain's Men were certainly the first to perform it. Besides their strong connections with Shakespeare, the Second Quarto actually names one of its actors, Will Kemp, instead of Peter in a line in Act five. Richard Burbage was probably the first Romeo, being the company's actor, and Master Robert Goffe (a boy) the first Juliet.[100] The premiere is likely to have been at "
        + "The Theatre, with other early productions at The Curtain.[103] Romeo and Juliet is one of the first Shakespearean plays to have been performed outside England: a shortened and simplified version was performed in Nördlingen in 1604.";

        var regex1 = $scope.regex1;

        $scope.applyRegEx = function() {
            if ($scope.regex1) {

                var flg = $scope.regex1Flag;
                if (!flg) {
                    flg = "g";
                }

                var pattern1 = new RegExp($scope.regex1, flg);

                $scope.textAfterRegExApplied = $scope.regexText.match(pattern1);

                if (!$scope.textAfterRegExApplied) {
                    $scope.textAfterRegExApplied = "no matches found";
                }
            } else {
                $scope.textAfterRegExApplied = "not valid regex ?  " + $scope.regex1;
            }
        }
    }

})(window.angular);