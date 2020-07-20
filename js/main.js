(function() {
    $(document).ready(init);

    function init(){
        $('.sidenav').sidenav();
        $('#noticeModal').modal();
        $('#noticeModal').modal('open');
    }
})();