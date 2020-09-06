(function() {
	if (input.keywords != null && input.keywords != '')
		data.items = getCatalogItems(input.keywords);
	
	function getCatalogItems(keywords) {
		var sc = new GlideRecord('sc_cat_item');
		sc.addActiveQuery();
		sc.addQuery('123TEXTQUERY321', keywords);
		sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard,sc_cat_item_content');
		sc.addQuery('sc_catalogs', 'e0d08b13c3330100c8b837659bba8fb4');
		sc.setLimit(100);
		sc.orderByDesc("ir_query_score");
		sc.query();
		var results = [];
		while (sc.next()) {
			if (!$sp.canReadRecord(sc))
				continue;

			var item = {};
			$sp.getRecordDisplayValues(item, sc, 'name,price,sys_id');
			item.category = sc.getValue('category');
			results.push(item);
		}
		return results;
	}
})();