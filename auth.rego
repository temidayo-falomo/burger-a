package httpapi.authz
import input
default allow = false



allow {
  {"name": input.name,"groupname": input.groupname} = data.geostore.usergroup[_]
  input.groupname = "v1/yes/bitchhh"
  input.groupname = "dominos"
  input.groupname = "GET"
  input.groupname = "EDITOR_DPAU"
}

allow {
  {"name": input.name,"groupname": input.groupname} = data.geostore.usergroup[_]
  input.groupname = "v2/collection/burger-2"
  input.groupname = "Foodeck"
  input.groupname = "UPDATE"
  input.groupname = "EDITOR_CPQ"
}

allow {
  {"name": input.name,"groupname": input.groupname} = data.geostore.usergroup[_]
  input.groupname = "v2/chance/bloll "
  input.groupname = "goBeyond"
  input.groupname = "UPDATE"
  input.groupname = "VIEWER"
}

