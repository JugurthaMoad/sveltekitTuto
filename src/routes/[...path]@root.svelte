<script context="module">
     export function load({ params }) {
      return {
        status: 404,
        error: new Error(`Not found: /${params.path}`)
      };
    }
  </script>