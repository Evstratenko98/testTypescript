function list_to_tree(list: any[]) {
  let map: any = {};
  let roots = [];

    for (let i = 0; i < list.length; i += 1) {
        map[list[i].id] = i;
        list[i].children = [];
    }
    for (let i = 0; i < list.length; i += 1) {
        let node = list[i];
        if (node.parent_id !== null) {
            list[map[node.parent_id]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}